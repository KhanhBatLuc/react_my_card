import { useSelector } from 'react-redux';

import { cardAddSelector } from '../redux/cardAddSelector';

export const useCardAddSelector = () => {
  return useSelector(cardAddSelector);
};
