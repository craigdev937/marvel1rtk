import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { MarvelAPI } from "./MarvelAPI";

export const Reducer = configureStore({
    reducer: {
        [MarvelAPI.reducerPath]: MarvelAPI.reducer,
    },  // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(MarvelAPI.middleware),
});

setupListeners(Reducer.dispatch);
export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


