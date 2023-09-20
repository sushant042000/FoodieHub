import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const isPresent = state.cartItems.find(
        (itm) => itm.id === action.payload.id
      );
      if (isPresent) {
        state.cartItems = state.cartItems.map((itm) => {
          return itm.id === action.payload.id
            ? { ...itm, qty: (itm.qty += 1) }
            : itm;
        });
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });
    },

    increamentQty: (state, action) => {
      state.cartItems = state.cartItems.map((itm) => {
        return itm.id === action.payload.id
          ? { ...itm, qty: (itm.qty += 1) }
          : itm;
      });
    },

    decrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((itm) => {
        return itm.id === action.payload.id
          ? { ...itm, qty: itm.qty > 1 ? (itm.qty -= 1) : itm.qty }
          : itm;
      });
    },
  },
});

export const { addToCart, removeFromCart, increamentQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
