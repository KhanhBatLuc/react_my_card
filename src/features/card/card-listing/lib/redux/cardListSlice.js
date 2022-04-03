import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { STATUS } from 'src/lib/utils/statusChecker';
import * as cardsApi from 'src/lib/api/cardApi';

export const getCardList = createAsyncThunk(
  'cardList/get',
  async (body, thunkAPI) => {
    try {
      const response = await cardsApi.getCardList();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cardListSlice = createSlice({
  name: 'cardList',

  initialState: {
    status: STATUS.init, // init, listing, success, error
    result: null,
    error: null
  },

  extraReducers: {
    [getCardList.pending]: (state) => {
      state.status = STATUS.listing;
    },

    [getCardList.fulfilled]: (state, action) => {
      state.status = STATUS.success;
      state.result = action.payload;
      state.error = null;
    },

    [getCardList.rejected]: (state, action) => {
      state.status = STATUS.error;
      state.result = null;
      state.error = action.payload;
    }
  }
});

export default cardListSlice;
