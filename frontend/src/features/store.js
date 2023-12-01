import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import AccountSlice from "./AccountSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        product: ProductSlice,
        cart: CartSlice,
        account: AccountSlice,


    },
});

export default store;