import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shopping-actions/shoppingReducer";

const Store = configureStore({
  reducer: {
    shop: shoppingReducer,
  },
});

export default Store;
