import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./asyncActions";
import { Status, UserSliceState } from "./types";

const initialState: UserSliceState = {
  users: [],
  searchValue: "",
  status: Status.LOADING,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    findUser(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = Status.LOADING;
      state.users = [];
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = Status.REJECTED;
      state.users = [];
    });
  },
});

export const { findUser } = usersSlice.actions;

export default usersSlice.reducer;
