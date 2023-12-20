import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        API: () => "The Marvel API!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


