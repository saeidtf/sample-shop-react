import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { orderApi, productApi, sliderApi } from "../services";

export const store = configureStore({
  reducer: {
    [orderApi.reducerPath]: orderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      orderApi.middleware,
      productApi.middleware,
      sliderApi.middleware
    ),
});

setupListeners(store.dispatch);
