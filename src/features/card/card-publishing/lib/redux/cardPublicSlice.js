import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { STATUS } from 'src/lib/utils/statusChecker';
import * as cardsApi from 'src/lib/api/cardApi';

export const showCardPublic = createAsyncThunk(
  'cardPublic/get',
  async (uuid, thunkAPI) => {
    try {
      console.log(uuid);
      const response = await cardsApi.showCardPubic(uuid);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cardPublicSlice = createSlice({
  name: 'cardPublic',

  initialState: {
    status: STATUS.init, // init, publishing, success, error
    result: null,
    error: null
  },

  extraReducers: {
    [showCardPublic.pending]: (state) => {
      state.status = STATUS.publishing;
    },

    [showCardPublic.fulfilled]: (state, action) => {
      state.status = STATUS.success;
      state.result = action.payload;
      state.error = null;
    },

    [showCardPublic.rejected]: (state, action) => {
      state.status = STATUS.error;
      state.result = null;
      state.error = action.payload;
    }
  }
});

export default cardPublicSlice;
