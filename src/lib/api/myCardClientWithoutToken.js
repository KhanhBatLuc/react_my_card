import AxiosClient from './AxiosClient';

const myCardClientWithoutToken = new AxiosClient(
  process.env.REACT_APP_MY_CARD_API_URL +
  process.env.REACT_APP_MY_CARD_API_VERSION
);

export default myCardClientWithoutToken;
