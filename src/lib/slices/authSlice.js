import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getByUser } from "@api/user";

export const fetchByUserThunk = createAsyncThunk(
  "data/fetchByUserThunk",
  async (id) => {
    const response = await getByUser(id);
    const { data } = response;
    return data;
  }
);
const initialState = {
  user: {
    nro_doc: "",
    phone: "",
    plate: "",
  },
  status: "",
  currentUser: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchByUserThunk.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchByUserThunk.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchByUserThunk.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
