import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Product/ProductSlice"
import wishlistProduct from "./wishlist/wishlistSlice"
import isCartProduct from "./Cart/CartSlice"

const store = configureStore({
    reducer:{
        products:productReducer,
        wishlist:wishlistProduct,
        iscart:isCartProduct

    }
})
export default store 