import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchhUserDetailsAPI, fetchUsersAPI } from "../../../utils/api";

/* eslint-disable*/
interface UserState {
  users: Array<any>;
  userDetails: Record<string, any> | null;
  loading: boolean;
  error: string | null;
  currentSearchQuery: string;
}

const initialState: UserState = {
  users: [],
  userDetails: null,
  loading: false,
  error: null,
  currentSearchQuery: "",
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (query: string) => {
    const response = await axios.get(`${fetchUsersAPI}${query}`);
    return response.data;
  }
);

export const fetchUserDetails = createAsyncThunk(
  "users/fetchUserDetails",
  async (userName: string) => {
    const response = await axios.get(`${fetchhUserDetailsAPI}${userName}`);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleCurrentSearchQuery: (state, action) => {
      state.currentSearchQuery = action.payload;
    },
    addToStarred: (state, action) => {
      state.users = state.users.map((user) =>
        user.login === action.payload ? { ...user, isStarred: true } : user
      );
    },
    removeFromStarred: (state, action) => {
      state.users = state.users.map((user) =>
        user.login === action.payload ? { ...user, isStarred: false } : user
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload?.items ?? [];
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Some Error Occurred";
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unable to fetch user details";
      });
  },
});

export const { handleCurrentSearchQuery, addToStarred, removeFromStarred } =
  userSlice.actions;
export default userSlice.reducer;
