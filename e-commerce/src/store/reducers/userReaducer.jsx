import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/Users";

const initialState = {
  loading: false,
  error: null,
  user: [],
};

export const getUserSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      console.log('success');
    },
  },
});

export default getUserSlice.reducer;
