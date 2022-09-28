import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../user/types";

import { invitedUsersState } from "./types";

const initialState: invitedUsersState = {
  invitedUsers: [],
};

const invitedUsersSlice = createSlice({
  name: "invitedUsers",
  initialState,
  reducers: {
    sendInvite(state, action: PayloadAction<UserType>) {
      const findUser = state.invitedUsers.find(
        (obj) => obj.id === action.payload.id
      );

      if (findUser) {
        state.invitedUsers = state.invitedUsers.filter(
          (obj) => obj.id !== action.payload.id
        );
      } else {
        state.invitedUsers.push(action.payload);
      }
    },
    clearInvites(state) {
      state.invitedUsers = [];
    },
  },
});

export const { sendInvite, clearInvites } = invitedUsersSlice.actions;

export default invitedUsersSlice.reducer;
