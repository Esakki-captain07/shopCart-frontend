import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Slice.js'

export default configureStore({
    reducer:{
        product:productReducer
    }
})