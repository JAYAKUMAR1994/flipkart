import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "../Mobile"
import cartReducer from "../Cart/Cart"
import homeReducer from '../Home/Home'

const Store = configureStore({
    reducer: {
        mobile: mobileReducer,
        cart: cartReducer,
        home:homeReducer
    }
})

export default Store