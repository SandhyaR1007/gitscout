import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchUsersAPI } from "../../../utils/api";

/* eslint-disable*/
interface UserState {
  users: Array<string>;
  userDetails: Record<string, any> | null;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  userDetails: null,
  loading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (userName: string) => {
    const response = await axios.get(`${fetchUsersAPI}${userName}`);
    console.log(response);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Some Error Occurred";
      });
  },
});

export default userSlice.reducer;
