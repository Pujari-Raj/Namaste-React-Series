import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // configuration of slice
    //name of slice
    name: "cart",
    // initial states of all value that'll be used from slice
    initialState: {
        items: [],
    },

    // reducers(funtn) for the action we have to make like addToCart,removeFromCart,ClearCart
    reducers:{
      addItem : (state, action) => {
        // mutating a state
        state.items.push(action.payload);
      },
      removeItem : (state, action) => {
        state.items.pop();
      }, 
      clearCart : (state, action) => {
        state.items.length = 0;
      }  
    }
})

//  exporting actions from cartslice
export const {addItem, removeItem, clearCart} = cartSlice.actions;

//  exporting reducer 
export default cartSlice.reducer;