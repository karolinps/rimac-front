import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@lib/slices/authSlice";
import counterReducer from "@lib/slices/counterSlice";

export const store = configureStore({
  reducer: { auth: authReducer, counter: counterReducer },
});
