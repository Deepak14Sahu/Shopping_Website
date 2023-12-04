import axios from "axios"
import { get_token } from "./AccountSlice"

const BASE_URL = "http://127.0.0.1:8000/api"

export const registerAPI = async ({ name, email, password1 }) => {
    try {
        const response = await axios.post(`${BASE_URL}/account/register/`, {
            name: name,
            email: email,
            password: password1
        })
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 400) {
            throw new Error(error.response.data.email[0]);
        } else {
            throw new Error('Network error. Please try again.');
        }
    }
}

export const loginAPI = async ({ email, password }) => {
    try {
        const response = await axios.post(`${BASE_URL}/account/token/`, {
            email: email,
            password: password
        })
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 401) {
            throw new Error('Incorrect email or password. Please try again.');
        } else {
            throw new Error('Network error. Please try again.');
        }
    }

}

export const productsList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/product/list/`)
        return response.data
    } catch (error) {
        throw new Error("An error occured!! refresh")
    }

}

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

export const cartProductsAPI = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/product/cart/`, {
            headers: {
                'Authorization': 'Bearer ' + get_token().access
            }
        })
        return response.data
    } catch (error) {
        throw new Error("Session expired. Please login again!!")
    }
}

export const removeCartProductAPI = async ({ productId }) => {
    try {
        const response = await axios.put(`${BASE_URL}/product/cart/${productId}/remove/`, {}, {
            headers: {
                'Authorization': 'Bearer ' + get_token().access
            }
        })
        return response.data
    } catch (error) {
        throw new Error("Session expired. Please login again!!")
    }
}

export const addCartProductAPI = async ({ productId }) => {
    try {
        const response = await axios.put(`${BASE_URL}/product/cart/${productId}/add/`, {}, {
            headers: {
                'Authorization': 'Bearer ' + get_token().access
            }
        })
        return response.data
    } catch (error) {
        throw new Error("Session expired. Please login again!!")
    }
}

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