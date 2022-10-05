import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { PhotoCollection } from "./types";

export const fetchCollections = createAsyncThunk<PhotoCollection[]>(
  "fetchCollectionsStatus",
  async () => {
    const { data } = await axios.get<PhotoCollection[]>(
      "https://6304c03394b8c58fd7244553.mockapi.io/collections"
    );

    return data;
  }
);
