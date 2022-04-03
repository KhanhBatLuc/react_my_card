import { useSelector, useDispatch } from 'react-redux';

import cardPublicSelector from '../redux/cardPublicSelector';
import * as cardPublicSlice from '../redux/cardPublicSlice';

export const useCardPublicSelector = () => {
  return useSelector(cardPublicSelector);
};

export const useCardPublic = () => {
  const dispatch = useDispatch();

  const showCardPublic = (uuid) => {
    dispatch(cardPublicSlice.showCardPublic(uuid));
  };

  return {
    showCardPublic
  };
};

export default useCardPublic;
