import { createSlice } from "@reduxjs/toolkit";
import { registerUser,login,logout,current,refreshAuthToken } from "./auth-thunk";

const initialState = {
  user: {},
  token: "", 
  refreshToken: "",
  isLogin: false,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false,
          state.token = payload.token,
          state.refreshToken = payload.refreshToken,
          state.user = payload.user,
          state.isLogin = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
          state.token = payload.token;
          state.refreshToken = payload.refreshToken;
          state.user = payload.user;
          state.isLogin = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message || 'An error occurred';
       
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = {};
        state.token = '';
        state.refreshToken = "";
        state.isLogin = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = null;
       
      })
      .addCase(current.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
      state.loading = false;
         state.user = payload.user;
          state.isLogin = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
       
      })
      .addCase(refreshAuthToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshAuthToken.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.accessToken;
        state.refreshToken = payload.refreshToken;
      })
      .addCase(refreshAuthToken.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.token = '';
        state.refreshToken = '';
        state.isLogin = false;
      });
  },
});
export const authReducer = authSlice.reducer;
