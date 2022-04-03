import myCardClient from './myCardClient';
import myCardClientAnotherUrl from './myCardClientAnotherUrl';

export const getCardList = () => {
  const url = '/cards';
  return myCardClient.get(url);
};

export const getCardPrivate = (cardId) => {
  const url = `/cards/${cardId}`;
  return myCardClient.get(url);
};

export const showCardPubic = (uuid) => {
  const url = `/p/${uuid}`;
  return myCardClientAnotherUrl.get(url);
};

export const createCardPrivate = (body) => {
  const url = '/cards';
  return myCardClient.post(url, body);
};

export const updateCardPrivate = (id, body) => {
  const url = `/cards/${id}`;
  return myCardClient.post(url, body);
};

export const deleteCard = (id) => {
  const url = `/cards/${id}`;
  return myCardClient.delete(url);
};

export const deleteInformation = (cardId, informationId) => {
  const url = `/cards/${cardId}/informations/${informationId}`;
  return myCardClient.delete(url);
};
