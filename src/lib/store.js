import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@lib/slices/authSlice";
import counterReducer from "@lib/slices/counterSlice";
import coverageReducer from "@lib/slices/coverageSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    coverage: coverageReducer,
  },
});
