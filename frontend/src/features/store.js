import { configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "./ProductListSlice";

const store = configureStore({
    reducer: {
        product: ProductListSlice,

    },
});

export default store;