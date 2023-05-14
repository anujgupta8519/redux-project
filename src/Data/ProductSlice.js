import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchData = createAsyncThunk("ProductSlice/fetch",async()=>{
    const data = await fetch(' https://api.escuelajs.co/api/v1/products');
  return await data.json();
   

})
const ProductSlice = createSlice ({
    name :"ProductSlice",
    initialState:{
        ProductArray: [],
        status :"idle",
        error:null
    },
    // reducers :{
    //  loadData :(state,action)=>{
    //     state.ProductArray = action.payload;
    //  },
    // },
     extraReducers: function (builder){
        builder
               .addCase(fetchData.pending,(state,action)=>{
                state.status ="loading"
               })
               .addCase(fetchData.fulfilled,(state,action)=>{
                state.ProductArray=action.payload;
                state.status = "fulfiled"
               })
               .addCase(fetchData.rejected,(state,action)=>{
                state.status = "faild";
                state.error = action.payload.message;
               })
   
    }
})

export default ProductSlice.reducer;
export const {loadData} = ProductSlice.actions;
