// TODO: Will delete this file later.

export const authSelector = (state) => state.auth;

export const cardListSelector = (state) => state.cardList;

// cardSlice
export const listInfoGlobalSelector = (state) =>
  state.cardsDefault.listCardGlobal;

export const listInfoCardsId = (state) => state.cards.listInformationCard;

// authSlice
export const isLoggedInSelector = (state) => state.auth;

export const messageSelector = (state) => state.message;

// localeSlice
export const localeSelector = (state) => state.locale;
// colorSlice
export const colorSelector = (state) => state.color;
// alertSlice
export const alertSelector = (state) => state.alert;
