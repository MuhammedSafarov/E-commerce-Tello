import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basketReducer";
import fetchProducts from "./reducers/fetchProducts";
import userReaducer from "./reducers/userReaducer";

export const store = configureStore({
  reducer: {
    allProducts: fetchProducts,
    basket: basketReducer,
    user: userReaducer,
  },
});
