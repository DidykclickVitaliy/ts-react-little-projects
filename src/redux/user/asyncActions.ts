import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "./types";

export const fetchUsers = createAsyncThunk<UserType[]>(
  "users/fetchUsersStatus",
  async () => {
    const { data: axiosData } = await axios.get("https://reqres.in/api/users");

    return axiosData.data;
  }
);
