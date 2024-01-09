import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../component/customer/cart/cartSlice";

export default configureStore({
    reducer:{
        cart:cartslice,
    }
})
