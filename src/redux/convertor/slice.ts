import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRates } from "./asyncActions";
import { ConvertorState, Rates } from "./types";

const initialState: ConvertorState = {
  fromCurrency: "USD",
  toCurrency: "UAH",
  fromPrice: 1,
  toPrice: 0,
  rates: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFromPrice(state, action: PayloadAction<number>) {
      state.fromPrice = action.payload;
    },
    setToPrice(state, action: PayloadAction<number>) {
      state.toPrice = action.payload;
    },
    setFromCurrency(state, action: PayloadAction<string>) {
      state.fromCurrency = action.payload;
    },
    setToCurrency(state, action: PayloadAction<string>) {
      state.toCurrency = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRates.pending, (state) => {
      state.rates = {};
    });
    builder.addCase(
      fetchRates.fulfilled,
      (state, action: PayloadAction<Rates>) => {
        state.rates = action.payload;
        state.fromPrice = 1;
        state.toPrice = action.payload[state.toCurrency];
      }
    );
    builder.addCase(fetchRates.rejected, (state) => {
      state.rates = {};
    });
  },
});

export const { setFromPrice, setToPrice, setFromCurrency, setToCurrency } =
  usersSlice.actions;

export default usersSlice.reducer;
