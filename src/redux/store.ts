import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { orderApi, productApi, sliderApi , userApi } from "../services";
import cartSlice from "./feuchers/cartSlice";
import userSlice from "./feuchers/userSlice";


export const store = configureStore({
  reducer: {
    [orderApi.reducerPath]: orderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    cart: cartSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      orderApi.middleware,
      productApi.middleware,
      sliderApi.middleware,
      userApi.middleware,
    ),
});

setupListeners(store.dispatch);

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart.value));
  localStorage.setItem("user", JSON.stringify(store.getState().user?.value));  
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
