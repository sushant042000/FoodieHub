import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slices/CartSlice";
import categorySlice from "../Slices/categorySlice";
import SearchSlice from "../Slices/SearchSlice";


const Store=configureStore({
    reducer:{
      cart:cartSlice,
      category:categorySlice,
      search:SearchSlice
      
    }
})

export default Store;