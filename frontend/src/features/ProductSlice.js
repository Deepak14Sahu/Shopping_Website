import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { productsList } from "./apiProvider"

export const getAllProducts = createAsyncThunk("getProducts", async (rejectWithValue) => {
    try {
        return await productsList()
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const ProductSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        is_loading: false,
        is_error: null
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.is_loading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.is_loading = false
                state.products = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.is_loading = false
                state.is_error = action.payload
            })
    },
}
)

export default ProductSlice.reducer