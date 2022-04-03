import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    message: {},
    messageIf: {}
  },
  reducers: {
    setAlert: (state, action) => {
      state.message = action.payload;
    },
    setAlertInfo: (state, action) => {
      state.messageIf = action.payload;
    },
    clearAlert: (state, action) => {
      state.message = '';
    },
    clearAlertInfo: (state, action) => {
      state.messageIf = '';
    }
  }
});

export const { setAlert, clearAlert, setAlertInfo, clearAlertInfo } =
  alertSlice.actions;

export default alertSlice;
