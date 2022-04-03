import _get from 'lodash/get';

import AxiosClient from './AxiosClient';
import { getLocalStorage } from 'src/lib/utils/myLocalStorage';

const myCardClientAnotherUrl = new AxiosClient(
  process.env.REACT_APP_MY_CARD_API_URL,
  () => {
    const token = _get(getLocalStorage('auth'), 'token');
    if (token) return token;
    return null;
  }
);

export default myCardClientAnotherUrl;
