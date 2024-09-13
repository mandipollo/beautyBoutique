"use client";
import counterReducer from "./features/counter/counterSlice";
import filterReducer from "./features/shopfilter/shopFilterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
	return configureStore({
		reducer: {
			counter: counterReducer,
			filter: filterReducer,
		},
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
