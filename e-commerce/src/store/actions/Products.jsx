import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../Commerce";

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    try {
      const response = await commerce.products.list();
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);
