import axios from "axios"
import { get_token } from "./AccountSlice"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://127.0.0.1:8000/api"

export const registerUser = createAsyncThunk("registerUser", async ({ name, email, password1 }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${BASE_URL}/account/register/`, {
            name: name,
            email: email,
            password: password1
        })
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return rejectWithValue(error.response.data.email[0]);
        } else {
            return rejectWithValue('Network error. Please try again.');
        }
    }
})

export const loginUser = createAsyncThunk("loginUser", async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${BASE_URL}/account/token/`, {
            email: email,
            password: password
        })

        return response.data
    } catch (error) {

        if (error.response && error.response.status === 401) {
            return rejectWithValue('Incorrect email or password. Please try again.');
        } else {
            return rejectWithValue('Network error. Please try again.');
        }

    }
})

export const getAllProducts = createAsyncThunk("getProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_URL}/product/list/`)
        return response.data
    } catch (error) {
        return rejectWithValue("An error occured!! refresh")
    }
})

export const productDetailsAPI = async ({ productId }) => {
    try {
        const response = await axios.get(`${BASE_URL}/product/list/${productId}/`)
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error("Page Not Found")
        }
        throw new Error("An error occured!! refresh")
    }
}

export const getCartProducts = createAsyncThunk("getCartProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_URL}/product/cart/`, {
            headers: {
                'Authorization': 'Bearer ' + get_token().access
            }
        })
        return response.data
    } catch (error) {
        return rejectWithValue("Session expired. Please login again!!")
    }
})

export const addCartProduct = createAsyncThunk("addCartProducts", async (productId, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${BASE_URL}/product/cart/${productId}/add/`, {}, {
            headers: {
                'Authorization': 'Bearer ' + get_token().access
            }
        })
        return response.data
    } catch (error) {
        return rejectWithValue("Session expired. Please login again!!")
    }
})

export const removeCartProduct = createAsyncThunk("removeCartProducts", async (productId, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${BASE_URL}/product/cart/${productId}/remove/`, {}, {
            headers: {
                'Authorization': 'Bearer ' + get_token().access
            }
        })
        return response.data
    } catch (error) {
        return rejectWithValue("Session expired. Please login again!!")
    }
})

export const refreshAccessTokenAPI = async ({ refreshToken }) => {
    try {
        const response = await axios.post(`${BASE_URL}/account/token/refresh/`, {
            refresh: refreshToken
        })
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 401) {
            throw new Error("Page Not Found")
        }
        throw new Error("An error occured!! refresh")
    }

}