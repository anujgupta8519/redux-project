import { createSlice } from '@reduxjs/toolkit'
const ProductSlice = createSlice ({
    name :"ProductSlice",
    initialState:{
        ProductArray: []
    },
    reducers :{
     loadData :(state,action)=>{
        state.ProductArray = action.payload;
     }
    }
})

export default ProductSlice.reducer;
export const {loadData} = ProductSlice.actions;
