import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "./types";

const initialState: FilterState = {
  categoryIndex: 0,
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
      state.categoryIndex = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategory, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
