import { useSelector, useDispatch } from 'react-redux';

import * as authSlice from '../redux/authSlice';
import {
  authRegisterSelector,
  authLoginSelector,
  authLogoutSelector,
} from '../redux/authSelector';

export const useAuthRegisterSelector = () => {
  return useSelector(authRegisterSelector);
};

export const useAuthLoginSelector = () => {
  return useSelector(authLoginSelector);
};

export const useAuthLogoutSelector = () => {
  return useSelector(authLogoutSelector);
};

export const useAuth = () => {
  const dispatch = useDispatch();

  const login = (email, password) => {
    dispatch(authSlice.login({ email, password }));
  };

  const loginFulfilled = (auth) => {
    dispatch(authSlice.loginFulfilled(auth));
  };

  const register = (email, password) => {
    dispatch(authSlice.register({ email, password }));
  };

  const logout = (token) => {
    dispatch(authSlice.logout(token));
  };

  return {
    login,
    loginFulfilled,
    register,
    logout
  };
};

export default useAuth;
