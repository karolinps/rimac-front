import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 12500,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.total < 16500) state.total += 100;
    },
    decrement: (state) => {
      if (state.total > 12500) state.total -= 100;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
