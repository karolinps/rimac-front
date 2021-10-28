import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 20,
};

export const coverageSlice = createSlice({
  name: "coverage",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setAuth } = coverageSlice.actions;

export default coverageSlice.reducer;
