import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAllProducts } from "./RequestApi";

export const productSlice = createSlice({
    name:'product',
    initialState:{
        product:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchGetAllProducts.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchGetAllProducts.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.product = action.payload || []
        })
        .addCase(fetchGetAllProducts.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer