import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signup,
  signin,
  logoutUser,
  getCurrentUser,
  refreshToken,
} from "../../servises/api/auth";
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signup(credentials);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      return await signin(credentials);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (error.response) {
          const { status, data } = error.response;
          let message = "An unexpected error occurred";

          if (status === 400) {
            message = "Invalid request body";
          } else if (status === 404) {
            message = "Service not found";
          } else if (status === 409) {
            message = data.message || "Such email already exists";
          } else if (status === 500) {
            message = "Server error";
          }

          return rejectWithValue({ message, status });
        } else {
          return rejectWithValue({ message: error.message, status: null });
        }
      }
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await logoutUser();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const current = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      return await getCurrentUser(auth.token, auth.refreshToken);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshAuthToken = createAsyncThunk(
  "auth/refreshAuthToken",
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const newTokens = await refreshToken(auth.refreshToken);
      setToken(newTokens.accessToken);
      return newTokens;
    } catch (error) {
      clearToken();
      return rejectWithValue(error.response.data);
    }
  }
);
