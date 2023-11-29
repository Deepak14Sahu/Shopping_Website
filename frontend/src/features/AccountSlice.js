import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginAPI, registerAPI } from "./apiProvider"
import { jwtDecode } from "jwt-decode";

export const loginUser = createAsyncThunk("loginUser", async ({ email, password }, { rejectWithValue }) => {
    try {
        return await loginAPI({ email, password })
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const registerUser = createAsyncThunk("registerUser", async ({ name, email, password1 }, { rejectWithValue }) => {
    try {
        return await registerAPI({ name, email, password1 })
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const AccountSlice = createSlice({
    name: 'account',
    initialState: {
        user: null,
        is_loading: false,
        is_error: null,
        is_created: null,
        is_authenticated: localStorage.getItem("authtoken") || null
    },
    reducers: {
        logout(state) {
            state.user = null
            state.is_authenticated = null
            localStorage.removeItem("authtoken")

        },
        resetIsCreated(state) {
            state.is_created = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state) => {
                state.is_loading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.is_loading = false
                state.is_error = null
                state.user = jwtDecode(action.payload.access).name
                state.is_authenticated = true
                localStorage.setItem("authtoken", JSON.stringify(action.payload))
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.is_loading = false
                state.is_error = action.payload

            })
            .addCase(registerUser.pending, (state) => {
                state.is_loading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.is_loading = false
                state.is_error = null
                state.user = null
                state.is_created = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.is_loading = false
                state.is_error = action.payload
            })
    },
})

export default AccountSlice.reducer
export const { logout, resetIsCreated } = AccountSlice.actions