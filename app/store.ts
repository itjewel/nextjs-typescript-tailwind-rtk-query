import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { appSlice } from "../features/api/apiSlice";


export const store = configureStore({
  reducer: {
    [appSlice.reducerPath] : appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appSlice.middleware),
});

setupListeners(store.dispatch)