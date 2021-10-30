import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 20,
};

export const coverageSlice = createSlice({
  name: "coverage",
  initialState,
  reducers: {
    addAmount: (state, { payload }) => {
      state.amount += payload;
    },
    removeAmount: (state, { payload }) => {
      state.amount -= payload;
    },
  },
});

export const { addAmount, removeAmount } = coverageSlice.actions;

export default coverageSlice.reducer;
