import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import collections from "./collections/slice";
import filters from "./filters/slice";

export const store = configureStore({
  reducer: { collections, filters },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
