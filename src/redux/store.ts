import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import user from "./user/slice";
import invitedUsers from "./invitedUsers/slice";

export const store = configureStore({
  reducer: { user, invitedUsers },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
