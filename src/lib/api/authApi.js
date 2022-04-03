import myCardClient from './myCardClient';
import myCardClientWithoutToken from './myCardClientWithoutToken';

export const login = (email, password) => {
  const url = '/login';
  return myCardClient.post(url, { email, password });
};

export const register = (email, password) => {
  const url = '/register';
  return myCardClientWithoutToken.post(url, { email, password });
};

export const logout = (token) => {
  const url = '/logout';
  return myCardClient.post(url, { token });
};

export const verifyRegister = (token) => {
  const url = '/register';
  return myCardClientWithoutToken.get(url, {
    token
  });
};
