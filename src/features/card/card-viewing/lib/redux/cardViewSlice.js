import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { STATUS } from 'src/lib/utils/statusChecker';
import * as cardsApi from 'src/lib/api/cardApi';

export const getCardView = createAsyncThunk(
  'cardView/get',
  async (cardId, thunkAPI) => {
    try {
      const response = await cardsApi.getCardPrivate(cardId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cardViewSlice = createSlice({
  name: 'cardView',

  initialState: {
    status: STATUS.init, // init, viewing, success, error
    result: null,
    error: null
  },

  extraReducers: {
    [getCardView.pending]: (state) => {
      state.status = STATUS.viewing;
    },

    [getCardView.fulfilled]: (state, action) => {
      state.status = STATUS.success;
      state.result = action.payload;
      state.error = null;
    },

    [getCardView.rejected]: (state, action) => {
      state.status = STATUS.error;
      state.result = null;
      state.error = action.payload;
    }
  }
});

export default cardViewSlice;
