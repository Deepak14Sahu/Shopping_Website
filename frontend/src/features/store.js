import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import AccountSlice from "./AccountSlice";

const store = configureStore({
    reducer: {
        product: ProductSlice,
        account: AccountSlice,


    },
});

export default store;