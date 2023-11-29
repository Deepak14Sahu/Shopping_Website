import axios from "axios"

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
