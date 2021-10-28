import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@lib/slices/counterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
