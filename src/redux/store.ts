import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { orderApi, productApi, sliderApi , userApi } from "../services";

export const store = configureStore({
  reducer: {
    [orderApi.reducerPath]: orderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      orderApi.middleware,
      productApi.middleware,
      sliderApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);
