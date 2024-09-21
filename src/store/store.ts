"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

// slice
import filterReducer from "./features/shopfilter/shopFilterSlice";
import cartReducer from "./features/cart/cartSlice";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

const createNoopStorage = () => {
	return {
		getItem() {
			return Promise.resolve(null);
		},
		setItem() {
			return Promise.resolve();
		},
		removeItem() {
			return Promise.resolve();
		},
	};
};
const storage =
	typeof window !== "undefined"
		? createWebStorage("local")
		: createNoopStorage(); // fallback for non-browser environments
const persistConfig = {
	key: "persist",
	storage,
};

const rootReducer = combineReducers({
	filter: filterReducer,
	cart: cartReducer,
});

const makeConfiguredStore = () =>
	configureStore({
		reducer: rootReducer,
	});

export const makeStore = () => {
	const isServer = typeof window === "undefined";
	if (isServer) {
		return makeConfiguredStore();
	} else {
		const persistedReducer = persistReducer(persistConfig, rootReducer);
		let store: any = configureStore({
			reducer: persistedReducer,
		});
		store.__persistor = persistStore(store);
		return store;
	}
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
