import { createSlice } from "@reduxjs/toolkit"
import { getAllProducts } from "./apiProvider"


const ProductSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: 'idle',
        error: null
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.status = 'loading'
                state.is_loading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = 'success'
                state.products = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    },
}
)

export default ProductSlice.reducer