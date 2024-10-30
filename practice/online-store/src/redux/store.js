import { configureStore } from "@reduxjs/toolkit";
import {catalogApi} from "./appSlice"

export const store = configureStore({
    reducer:{
        [catalogApi.reducerPath]:catalogApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(catalogApi.middleware)
})