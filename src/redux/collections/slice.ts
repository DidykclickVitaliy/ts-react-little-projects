import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCollections } from "./asyncActions";
import { PhotoCollection, PhotoCollectionsState, Status } from "./types";

const initialState: PhotoCollectionsState = {
  items: [],
  page: 1,
  status: Status.LOADING,
};

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCollections.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchCollections.fulfilled,
      (state, action: PayloadAction<PhotoCollection[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchCollections.rejected, (state) => {
      state.items = [];
      state.status = Status.REJECT;
    });
  },
});

export const { setPage } = collectionsSlice.actions;

export default collectionsSlice.reducer;
