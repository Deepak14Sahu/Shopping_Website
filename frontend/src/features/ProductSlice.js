import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllProducts = createAsyncThunk("getProducts", async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/product/list")
    return response.data

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
                console.log(action.payload)
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