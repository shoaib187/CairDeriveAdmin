// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: null,
  expiry: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, user } = action.payload;
      const expiry = Date.now() + 24 * 60 * 60 * 1000; // 1 day
      state.token = token;
      state.user = user;
      state.expiry = expiry;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.expiry = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem('persist:root');
    },
    checkTokenExpiry: (state) => {
      if (state.expiry && Date.now() > state.expiry) {
        state.token = null;
        state.user = null;
        state.expiry = null;
        state.isAuthenticated = false;
      }
    },
  },
});

export const { loginSuccess, logout, checkTokenExpiry } = authSlice.actions;
export default authSlice.reducer;
