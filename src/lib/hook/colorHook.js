import { useSelector, useDispatch } from 'react-redux';

import { colorSelector } from 'src/lib/redux/selectors';
import * as colorsSlice from 'src/lib/slice/colorsSlice';

export const useColorSelector = () => {
  return useSelector(colorSelector);
};

export const useColor = () => {
  const dispatch = useDispatch();

  const changeColor = (language) => {
    dispatch(colorsSlice.changeColor(language));
  };

  return {
    changeColor
  };
};

export default useColor;
