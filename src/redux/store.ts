import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import convertor from "./convertor/slice";

export const store = configureStore({
  reducer: { convertor },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
