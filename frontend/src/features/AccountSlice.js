import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const loginUser = createAsyncThunk("loginUser", async ({ username, password }) => {
    const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: username,
        password: password
    })
    console.log(response.data);

    return response.data

})

const AccountSlice = createSlice({
    name: 'Account',
    initialState: {
        user: null,

        is_loading: false,
        is_error: null
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