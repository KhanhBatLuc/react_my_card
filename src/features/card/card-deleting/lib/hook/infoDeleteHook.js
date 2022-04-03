import { useSelector, useDispatch } from 'react-redux';

import infoDeleteSelector from '../redux/infoDeleteSelector';
import * as infoDeleteSlice from '../redux/infoDeleteSlice';

export const useInfoDeleteSelector = () => {
  return useSelector(infoDeleteSelector);
};

export const useInfoDelete = () => {
  const dispatch = useDispatch();

  const deleteInfo = (card_id, id) => {
    dispatch(infoDeleteSlice.addInfoListDelete({ card_id, id }));
  };

  return {
    deleteInfo
  };
};

export default useInfoDelete;
