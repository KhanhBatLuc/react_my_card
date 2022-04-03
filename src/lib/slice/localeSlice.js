import { createSlice } from '@reduxjs/toolkit';

const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    language: {
      value: 'vi-VN',
      label: 'VietNam',
      icon: '/static/icons/ic_flag_vn.png'
    }
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { changeLanguage } = localeSlice.actions;

// can use local storage save index language

export default localeSlice;
