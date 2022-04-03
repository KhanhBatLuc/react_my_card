import { createSlice } from '@reduxjs/toolkit';

const infoDeleteSlice = createSlice({
  name: 'deleteInfo',
  initialState: {
    listInfoItemDelete: []
  },
  reducers: {
    addInfoListDelete: (state, action) => {
      state.listInfoItemDelete.push(action.payload);
    }
  }
});

export const { addInfoListDelete } = infoDeleteSlice.actions;

export default infoDeleteSlice;
