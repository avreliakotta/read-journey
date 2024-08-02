import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signup,
  signin,
  logoutUser,
  getCurrentUser,
  
} from "../../servises/api/auth";
import { setToken } from "../../instance/instance";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signup(credentials);
      return data;
    } catch (error) {
      console.error("RegisterUser error:", error);
      return rejectWithValue(error.response);
    }
  }
);


export const login = createAsyncThunk(
  'users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await signin(credentials);
      
    } catch (error) {
      if (error.response &&error.response.data.message) {
       return rejectWithValue(error.response.data.message)
      }else{
        return  rejectWithValue(error.message)
      }
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue,getState}) => {
    try{
      const { token } = getState().users;
      if (!token) {
        throw new Error('No token found');
      }

      setToken(token);
      return await logoutUser();
    }catch(error){
      if (error.response &&error.response.data.message) {
        return rejectWithValue(error.response.data.message)
       }else{
         return  rejectWithValue(error.message)
       }
    }
     
     
      
  }
);

export const current = createAsyncThunk(
  "users/current",
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().users;
    try {
      setToken(token);
      return await getCurrentUser();
    } catch (error) {
      if (error.response &&error.response.data.message) {
        return rejectWithValue(error.response.data.message)
       }else{
         return  rejectWithValue(error.message)
       }
    }
  }
);

