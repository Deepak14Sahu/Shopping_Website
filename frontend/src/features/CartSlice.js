import { createSlice } from "@reduxjs/toolkit";
import { removeCartProduct, getCartProducts, addCartProduct } from "./apiProvider";
import { toast } from "react-toastify";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        status: 'idle',
        error: false
    },
    extraReducers(builder) {
        builder
            .addCase(getCartProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getCartProducts.fulfilled, (state, action) => {
                state.status = 'success'
                state.cart = [...action.payload.products]
            })
            .addCase(getCartProducts.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
                toast.error(action.payload)
            })
            .addCase(removeCartProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(removeCartProduct.fulfilled, (state, action) => {
                state.status = 'success'
                state.cart = [...action.payload.products]
            })
            .addCase(removeCartProduct.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
                toast.error(action.payload)
            })
            .addCase(addCartProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addCartProduct.fulfilled, (state, action) => {
                state.status = 'success'
                state.cart = [...action.payload.products]
            })
            .addCase(addCartProduct.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
                toast.error(action.payload)
            })
    }
})


export default CartSlice.reducer