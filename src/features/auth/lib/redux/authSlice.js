import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { STATUS } from 'src/lib/utils/statusChecker';
import * as authApi from 'src/lib/api/authApi';
import { setLocalStorage } from 'src/lib/utils/myLocalStorage';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await authApi.login(email, password);
      setLocalStorage('auth', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await authApi.register(email, password);
      // return just have data user , otherwise it will conflict :vv
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (token, thunkAPI) => {
    try {
      const response = await authApi.logout(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    register: {
      status: STATUS.init, // init, registering, success, error
      result: null,
      error: null
    },
    login: {
      status: STATUS.init, // init, loggingIn, success, error
      result: null,
      error: null
    },
    logout: {
      status: STATUS.init, // init, loggingOut, success, error
      result: null,
      error: null
    }
  },

  reducers: {
    loginFulfilled: (state, action) => {
      state.login.status = STATUS.success;
      state.login.result = action.payload;
      state.login.error = null;
    }
  },

  extraReducers: {
    [login.pending]: (state) => {
      state.login.status = STATUS.loggingIn;
    },

    [login.fulfilled]: (state, action) => {
      state.login.status = STATUS.success;
      state.login.result = action.payload;
      state.login.error = null;
    },

    [login.rejected]: (state, action) => {
      state.login.status = STATUS.error;
      state.login.result = null;
      state.login.error = action.payload;
    },

    [register.pending]: (state) => {
      state.register.status = STATUS.registering;
    },

    [register.fulfilled]: (state, action) => {
      state.register.status = STATUS.success;
      state.register.result = action.payload;
      state.register.error = null;
    },

    [register.rejected]: (state, action) => {
      state.register.status = STATUS.error;
      state.register.result = null;
      state.register.error = action.payload;
    },

    [logout.pending]: (state) => {
      state.logout.status = STATUS.loggingOut;
    },

    [logout.fulfilled]: (state, action) => {
      state.logout.status = STATUS.success;
      state.login.status = STATUS.init;
      state.logout.result = null;
      state.logout.error = null;
    },

    [logout.rejected]: (state, action) => {
      state.logout.status = STATUS.error;
      state.logout.result = null;
      state.logout.error = action.payload;
    }
  }
});

export const { loginFulfilled } = authSlice.actions;

export default authSlice;
