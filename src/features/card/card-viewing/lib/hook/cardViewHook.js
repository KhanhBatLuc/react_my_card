import { useSelector, useDispatch } from 'react-redux';

import cardViewSelector from '../redux/cardViewSelector';
import * as cardViewSlice from '../redux/cardViewSlice';

export const useCardViewSelector = () => {
  return useSelector(cardViewSelector);
};

export const useCardView = () => {
  const dispatch = useDispatch();

  const getCardView = (cardId) => {
    dispatch(cardViewSlice.getCardView(cardId));
  };

  return {
    getCardView
  };
};

export default useCardView;
