import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRates = createAsyncThunk("fetchRatesStatus", async () => {
  const data = await axios
    .get("https://cdn.cur.su/api/latest.json")
    .then((response) => response.data.rates);

  return data;
});
