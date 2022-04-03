import { useSelector, useDispatch } from 'react-redux';

import cardListSelector from '../redux/cardListSelector';
import * as cardListSlice from '../redux/cardListSlice';

export const useCardListSelector = () => {
  return useSelector(cardListSelector);
}

export const useCardList = () => {
  const dispatch = useDispatch();

  const getCardList = () => {
    dispatch(cardListSlice.getCardList())
  }

  return {
    getCardList,
  }
};

export default useCardList;
