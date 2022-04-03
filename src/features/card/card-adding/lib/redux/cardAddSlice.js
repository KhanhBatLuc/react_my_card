import { createSlice } from '@reduxjs/toolkit';

import { LIST_ICON_INFORMATION } from 'src/lib/utils/constants';

const removeItemInfo = (arr, num) => arr.filter((el) => el.position !== num);

const checkOrReturnObjInfo = (arr, objItemInfo) => {
  const itemMaxInArr = arr.reduce(
    (acc, shot) => (acc = acc > shot.position ? acc : shot.position),
    0
  );
  if (itemMaxInArr) {
    return {
      ...objItemInfo,
      position: itemMaxInArr + 1,
      label: '',
      value: ''
    };
  } else {
    return {
      ...objItemInfo,
      position: 1,
      label: '',
      value: ''
    };
  }
};

const cardAddSlice = createSlice({
  name: 'cardAddSlice',
  initialState: {
    listCardGlobal: LIST_ICON_INFORMATION,
    listInformationCard: [],
    listItemCardWillCreate: {
      card_id: '',
      card_name: '', // required
      full_name: '', // required
      company_name: '',
      color: '',
      title: '',
      about: '',
      cover_images: '',
      profile_picture: ''
    }
  },
  reducers: {
    addInformation: (state, action) => {
      // check objItem with contain
      const objectItemInf = checkOrReturnObjInfo(
        state.listInformationCard,
        action.payload
      );
      state.listInformationCard.push(objectItemInf);
    },
    removeInformation: (state, action) => {
      state.listInformationCard = removeItemInfo(
        state.listInformationCard,
        action.payload
      );
    },
    dropInformation: (state, action) => {
      const itemHasCustomer = action.payload.map((e, index) => {
        return {
          ...e,
          position: index + 1
        };
      });
      state.listInformationCard = itemHasCustomer;
    },
    // typing of input
    typingInputObject: (state, action) => {
      state.listItemCardWillCreate[action.payload.key] = action.payload.char;
    },
    typingInputArray: (state, action) => {
      state.listInformationCard.map((e) => {
        if (
          e.position === action.payload.position &&
          e.descript === action.payload.type
        ) {
          e[action.payload.key] = action.payload.char;
        }
      });
    },
    clearingInput: (state, action) => {
      state.listInformationCard = [];
      state.listItemCardWillCreate = {
        card_name: '',
        full_name: '',
        company_name: '',
        title: '',
        about: '',
        cover_images: '',
        profile_picture: ''
      };
    },
    addCardEdit: (state, action) => {
      const { info, ...other } = action.payload;
      state.listInformationCard = info;
      state.listItemCardWillCreate = other;
    }
  }
});

export const {
  addInformation,
  removeInformation,
  dropInformation,
  typingInputObject,
  typingInputArray,
  clearingInput,
  addCardEdit
} = cardAddSlice.actions;

export default cardAddSlice;
