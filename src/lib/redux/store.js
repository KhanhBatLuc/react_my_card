import { configureStore } from '@reduxjs/toolkit';

import authSlice from 'src/features/auth/lib/redux/authSlice';
import cardListSlice from 'src/features/card/card-listing/lib/redux/cardListSlice';
import cardViewSlice from 'src/features/card/card-viewing/lib/redux/cardViewSlice';
import cardPublicSlice from 'src/features/card/card-publishing/lib/redux/cardPublicSlice';
import cardAddSlice from 'src/features/card/card-adding/lib/redux/cardAddSlice';
import infoDeleteSlice from 'src/features/card/card-deleting/lib/redux/infoDeleteSlice';

import colorsSlice from '../slice/colorsSlice';
import localeSlice from '../slice/localeSlice';
import alertSlice from '../slice/alertSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cardList: cardListSlice.reducer,
    cardView: cardViewSlice.reducer,
    cardPublic: cardPublicSlice.reducer,
    cardAdd: cardAddSlice.reducer,
    deleteInfo: infoDeleteSlice.reducer,

    color: colorsSlice.reducer,
    locale: localeSlice.reducer,
    alert: alertSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
