import { configureStore } from "@reduxjs/toolkit";
import ProductsGlobal from "./slices/Products.slice"
import CartGlobal from "./slices/Cart.slice"


const store = configureStore({
    reducer:{
        ProductsGlobal,
        CartGlobal
    }
})

export default store