import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart(state, action) {
      const updateItem = [...state.cartItems];
      const itemIndex = updateItem.findIndex((i) => i.id === action.payload.id);

      if (itemIndex < 0) {
        let tempProduct = { ...action.payload, quantity: 1 };
        updateItem.push(tempProduct);
      } else {
        const updatedCart = { ...updateItem[itemIndex] };
        updatedCart.quantity++;
        updateItem[itemIndex] = updatedCart;
      }
      localStorage.setItem("cart", JSON.stringify(updateItem));
      return {
        ...state,
        cartItems: updateItem,
      };
    },
    removeToCart(state, action) {
      const updateItem = [...state.cartItems];
      const itemIndex = updateItem.findIndex((i) => i.id === action.payload.id);
      const updateCart = { ...updateItem[itemIndex] };

      if (updateCart.quantity === 1) {
        const filterItem = updateItem.filter((i) => i.id !== action.payload.id);
        return {
          ...state,
          cartItems: filterItem,
        };
      } else {
        updateCart.quantity--;
        updateItem[itemIndex] = updateCart;
        localStorage.setItem("cart", JSON.stringify(updateItem));
        return {
          ...state,
          cartItems: updateItem,
        };
      }
    },
    deleteItem(state, action) {
      const filterItem = state.cartItems.filter(
        (i) => i.id !== action.payload.id
      );

      localStorage.setItem("cart", JSON.stringify(filterItem));
      return {
        ...state,
        cartItems: filterItem,
      };
    },
  },
});

export const { addToCart, removeToCart, deleteItem } = shopSlice.actions;
export default shopSlice.reducer;
