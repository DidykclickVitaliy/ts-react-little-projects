import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { FiltersParams } from "../filters/types";
import { PhotoCollection } from "./types";

export const fetchCollections = createAsyncThunk<
  PhotoCollection[],
  FiltersParams
>("fetchCollectionsStatus", async (params) => {
  const { category, search, currentPage } = params;
  const { data } = await axios.get<PhotoCollection[]>(
    `https://6304c03394b8c58fd7244553.mockapi.io/collections/?page=${currentPage}&limit=3&${category}&${search} `
  );

  return data;
});
