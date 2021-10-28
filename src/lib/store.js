import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@lib/slices/authSlice";

export const store = configureStore({
  reducer: { auth: authReducer },
});
