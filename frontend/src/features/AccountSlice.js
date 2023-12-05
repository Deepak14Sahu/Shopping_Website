import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "./apiProvider"
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";


export const get_token = () => {
    if (localStorage.getItem("authtoken")) {
        return JSON.parse(localStorage.getItem("authtoken"))
    }
    return null
}

const AccountSlice = createSlice({
    name: 'account',
    initialState: {
        user: (get_token()) ? jwtDecode(get_token().access).name : null,
        status: 'idle',
        error: null,
        is_authenticated: get_token()
    },
    reducers: {
        logout(state) {
            state.user = null
            state.status = 'idle'
            state.is_authenticated = null
            localStorage.removeItem("authtoken")
            toast.info("Logged Out Successfully!!")

        },
        reset(state) {
            state.user = null
            state.status = 'idle'
            state.error = null

        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "success"
                state.user = jwtDecode(action.payload.access).name
                state.is_authenticated = action.payload
                localStorage.setItem("authtoken", JSON.stringify(action.payload))
                toast.success(`Welcome ${state.user.toUpperCase()}`)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload

            })
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading'

            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'success'
                state.user = null
                state.status = 'created'
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    },
})

export default AccountSlice.reducer
export const { logout, reset } = AccountSlice.actions