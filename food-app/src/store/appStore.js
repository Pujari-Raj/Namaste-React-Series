import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utilities/cartSlice";

const appStore = configureStore({
    reducer: {
        // This cartReducer contains all reducer from its slice  
        cart: cartReducer,
    }
})

export default appStore;