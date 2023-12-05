import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import AccountSlice from "./AccountSlice";
import CartSlice from "./CartSlice";
import WishlistSlice from "./WishlistSlice";

const store = configureStore({
    reducer: {
        account: AccountSlice,
        product: ProductSlice,
        cart: CartSlice,
        wishlist: WishlistSlice,



    },
});

export default store;