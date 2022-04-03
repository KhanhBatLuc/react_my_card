import { useSelector, useDispatch } from 'react-redux';

import { localeSelector } from 'src/lib/redux/selectors';
import * as localeSlice from 'src/lib/slice/localeSlice';

export const useLocaleSelector = () => {
  return useSelector(localeSelector);
};

export const useLocale = () => {
  const dispatch = useDispatch();

  const changeLanguage = (language) => {
    dispatch(localeSlice.changeLanguage(language));
  };

  return {
    changeLanguage
  };
};

export default useLocale;
