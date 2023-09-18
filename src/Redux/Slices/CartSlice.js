import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading:false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState:initialState,
  reducers: {
    addToCart: (state, action) => {
       
       state.cartItems.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
