import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Slice/orderSlice";
import totalReducer from "./Slice/totalSlice";
import { apiSlice } from "./Api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer:{
        order : orderReducer,
        total :totalReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
setupListeners(store.dispatch)
