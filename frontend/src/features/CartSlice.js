import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCartProductAPI, cartProductsAPI, removeCartProductAPI } from "./apiProvider";
import { toast } from "react-toastify";



export const getCartProducts = createAsyncThunk("getCartProducts", async (_, { rejectWithValue }) => {
    try {
        return await cartProductsAPI()
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const removeCartProduct = createAsyncThunk("removeCartProducts", async (productId, { rejectWithValue }) => {
    try {
        return await removeCartProductAPI({ productId })
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const addCartProduct = createAsyncThunk("addCartProducts", async (productId, { rejectWithValue }) => {
    try {
        return await addCartProductAPI({ productId })
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
            .addCase(removeCartProduct.pending, (state) => {
                state.is_loading = true
            })
            .addCase(removeCartProduct.fulfilled, (state, action) => {
                state.is_loading = false
                state.cart = [...action.payload.products]
            })
            .addCase(removeCartProduct.rejected, (state, action) => {
                state.is_loading = false
                state.is_error = action.payload
                toast.error(action.payload)
            })
            .addCase(addCartProduct.pending, (state) => {
                state.is_loading = true
            })
            .addCase(addCartProduct.fulfilled, (state, action) => {
                state.is_loading = false
                state.cart = [...action.payload.products]
            })
            .addCase(addCartProduct.rejected, (state, action) => {
                state.is_loading = false
                state.is_error = action.payload
                toast.error(action.payload)
            })
    }
})


export default CartSlice.reducer