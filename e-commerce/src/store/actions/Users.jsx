import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../Commerce";

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await commerce.customer.about();
    return response;
  } catch (err) {
    return err.message;
  }
});
