import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import CardSlice from "./CardSlice";

export const store = configureStore({
    reducer:{
        ProductReducer:ProductSlice,
        CardReducer:CardSlice
    }
})