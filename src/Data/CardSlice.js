import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name:"CardSlice",
    initialState:{
      cart:[]
    },

    reducers:{
        addProduct:(state,action)=>{
          const temp = state.cart.find(item=>item.id===action.payload)
          if (temp) {
            temp.quantity +=1;
            return;
          }
          state.cart.push({
            quantity:1,
            id:action.payload
          })
        },
        removeProduct:(state,action)=>{
            const temp =state.cart.find(item=>item.id===action.payload)
            if (temp) {
                temp.quantity -=1;
               if (state.cart.quantity===0) {
                state.cart = state.cart.filter(item => item.id!==temp.id)
               }
            }
        }
    }
})
export const{addProduct,removeProduct} = CardSlice.actions;
export default CardSlice.reducer;