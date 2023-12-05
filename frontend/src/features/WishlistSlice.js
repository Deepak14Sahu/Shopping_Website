import { createSlice } from "@reduxjs/toolkit";
import { addWishlistProduct, getWishlistProducts, removeWishlistProduct } from "./apiProvider";
import { toast } from "react-toastify";

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
        status: 'idle',
        error: false
    },
    extraReducers(builder) {
        builder
            .addCase(getWishlistProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getWishlistProducts.fulfilled, (state, action) => {
                state.status = 'success'
                state.wishlist = [...action.payload.products]
            })
            .addCase(getWishlistProducts.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
                toast.error(action.payload)
            })
            .addCase(removeWishlistProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(removeWishlistProduct.fulfilled, (state, action) => {
                state.status = 'success'
                state.wishlist = [...action.payload.products]
            })
            .addCase(removeWishlistProduct.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
                toast.error(action.payload)
            })
            .addCase(addWishlistProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addWishlistProduct.fulfilled, (state, action) => {
                state.status = 'success'
                state.wishlist = [...action.payload.products]
            })
            .addCase(addWishlistProduct.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
                toast.error(action.payload)
            })
    }
})


export default WishlistSlice.reducer