"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
	filter: string;
}

const initialState: CounterState = {
	filter: "all",
};

export const shopFilterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterType: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.filter = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { filterType } = shopFilterSlice.actions;

export default shopFilterSlice.reducer;
