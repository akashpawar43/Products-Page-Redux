import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./productSlice.js";

export default configureStore({
    reducer: {
        products : productReducer,
    },
});