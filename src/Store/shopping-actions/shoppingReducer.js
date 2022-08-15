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
  },
});

export const { addToCart } = shopSlice.actions;
export default shopSlice.reducer;
