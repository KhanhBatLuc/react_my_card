import { useSelector, useDispatch } from 'react-redux';

import * as alertSlice from 'src/lib/slice/alertSlice';
import { alertSelector } from 'src/lib/redux/selectors';

export const useAlertSelector = () => {
  return useSelector(alertSelector);
};

export const useAlert = () => {
  const dispatch = useDispatch();

  const setAlert = (message) => {
    dispatch(alertSlice.setAlert(message));
  };
  const setAlertInfo = (message) => {
    dispatch(alertSlice.setAlertInfo(message));
  };

  const clearAlert = () => {
    dispatch(alertSlice.clearAlert());
  };
  const clearAlertInfo = () => {
    dispatch(alertSlice.clearAlertInfo());
  };

  return {
    setAlert,
    clearAlert,
    setAlertInfo,
    clearAlertInfo
  };
};

export default useAlert;
