import { createSlice } from "@reduxjs/toolkit";
import { registerUser,login,logout,current} from "./auth-thunk";

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isRefreshing: false,
  isLogin: false,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: "users",
  initialState,
 
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
       state.loading = false,
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token,
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
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
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
        state.user.name = "";
        state.user.email = "";
        state.token = null;
        state.isLogin = false;
        state.loading = false;
        
      })
      .addCase(logout.rejected, (state, { payload }) => {
        console.error('Logout rejected:', payload);
        state.loading = false;
        state.error = payload;
       
      })
      .addCase(current.pending, (state) => {
        state.loading = true;
        state.error = null;
        
      })
      .addCase(current.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLogin = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        
      })
      
  },
});
export const authReducer = authSlice.reducer;

