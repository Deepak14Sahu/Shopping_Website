import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartProductsAPI } from "./apiProvider";
import { toast } from "react-toastify";



export const getCartProducts = createAsyncThunk("getCartProducts", async (_, { rejectWithValue }) => {
    try {
        return await cartProductsAPI()
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        is_loading: false,
        is_error: false
    },
    extraReducers(builder) {
        builder
            .addCase(getCartProducts.pending, (state) => {
                state.is_loading = true
            })
            .addCase(getCartProducts.fulfilled, (state, action) => {
                state.is_loading = false
                state.cart = [...action.payload.products]
            })
            .addCase(getCartProducts.rejected, (state, action) => {
                state.is_loading = false
                state.is_error = action.payload
                toast.error(action.payload)
            })
    }
})


export default CartSlice.reducer