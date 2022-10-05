import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCollections } from "./asyncActions";
import { PhotoCollection, PhotoCollectionsState } from "./types";

const initialState: PhotoCollectionsState = {
  items: [],
};

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCollections.pending, (state) => {});
    builder.addCase(
      fetchCollections.fulfilled,
      (state, action: PayloadAction<PhotoCollection[]>) => {
        state.items = action.payload;
      }
    );
    builder.addCase(fetchCollections.rejected, (state) => {});
  },
});

export const {} = collectionsSlice.actions;

export default collectionsSlice.reducer;
