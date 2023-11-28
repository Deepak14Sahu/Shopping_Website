import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const loginUser = createAsyncThunk("loginUser", async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/account/token/", {
            email: email,
            password: password
        })
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return rejectWithValue("Incorrect email or password. Please try again.");
        } else {
            return rejectWithValue('Network error. Please try again.');
        }
    }
})

const AccountSlice = createSlice({
    name: 'account',
    initialState: {
        user: null,
        is_loading: false,
        is_error: null
    },
    reducers: {
        logout(state) {
            state.user = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state) => {
                state.is_loading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.is_loading = false
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.is_loading = false
                state.is_error = action.payload
            })
    },
})

export default AccountSlice.reducer
export const { logout } = AccountSlice.actions