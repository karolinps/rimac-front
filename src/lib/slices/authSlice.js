import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    nro_doc: "",
    phone: "",
    plate: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.user = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
