import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../Commerce";

export const addBasketAsync = createAsyncThunk(
  "basket/addBasketAsync",
  async (params) => {
    try {
      const response = await commerce.cart.add(params.productId, params.count);
      console.log(response);
      return response;
    } catch (err) {
      return err.message;
    }
  }
);

export const getBasketAsync = createAsyncThunk(
  "basket/getBasketAsync",
  async () => {
    try {
      const responseData = await commerce.cart.retrieve();
      return responseData;
    } catch (err) {
      return err.message;
    }
  }
);

export const updateBasketCountAsync = createAsyncThunk(
  "basket/updateBasketCountAsync",
  async (params) => {
    try {
      const response = await commerce.cart.update(params.id, {quantity: params.quantity});
      return response;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteBasketAsync = createAsyncThunk(
  "basket/deleteBasketAsync",
  async (params) => {
    try {
      const response = await commerce.cart.remove(params.id);
      return response;
    } catch (err) {
      return err.message;
    }
  }
);