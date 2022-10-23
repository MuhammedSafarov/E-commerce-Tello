import { createSlice } from "@reduxjs/toolkit";
import { addBasketAsync } from "../actions/Basket";
import {
  getBasketAsync,
  deleteBasketAsync,
  updateBasketCountAsync,
} from "../actions/Basket";

const initialState = {
  value: [],
  loading: false,
  error: null,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  extraReducers: {
    [addBasketAsync.pending]: (state) => {
      state.loading = true;
    },
    [addBasketAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addBasketAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },
    [getBasketAsync.pending]: (state) => {
      state.loading = true;
    },
    [getBasketAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getBasketAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },
    [updateBasketCountAsync.pending]: (state) => {
      state.loading = true;
    },
    [updateBasketCountAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updateBasketCountAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },
    [deleteBasketAsync.pending]: (state) => {
      state.loading = true;
    },
    [deleteBasketAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [deleteBasketAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },
  },
});

export default basketSlice.reducer;
