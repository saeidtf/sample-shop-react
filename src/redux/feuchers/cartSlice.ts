import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ICart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

interface CartState {
  value: ICart[];
}

const cartStorage = localStorage.getItem("cart");

const initialState: CartState = {
  value: cartStorage ? JSON.parse(cartStorage) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      const index = state.value.findIndex((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      if (index === -1) {
        state.value.push(action.payload);
      } else {
        state.value[index].quantity += action.payload.quantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.value.findIndex((cartItem) => {
        return cartItem.id === action.payload;
      });
      state.value.splice(index, 1);
    },
    updateCart: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const index = state.value.findIndex((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      state.value[index].quantity = action.payload.quantity;
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCart, clearCart } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
