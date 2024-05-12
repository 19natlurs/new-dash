import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "menuSlider",
  initialState: {
    open: false,
  },
  reducers: {
    increment: (state) => {
      state.open = true;
    },
    decrement: (state) => {
      state.open = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
