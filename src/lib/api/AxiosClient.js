import axios from 'axios';
import queryString from 'query-string';

import { removeLocalStorage } from 'src/lib/utils/myLocalStorage';

class AxiosClient {
  constructor(baseURL, getToken = null) {
    const instance = axios.create({
      baseURL,
      headers: {
        'content-type': 'application/json'
      },
      paramsSerializer: (params) => queryString.stringify(params)
    });
    instance.interceptors.request.use(
      this._handleFulfilled.bind(this),
      this._handleRequestError
    );
    instance.interceptors.response.use(
      this._handleSuccess.bind(this),
      this._handleResponseError
    );
    this._instance = instance;
    this._getToken = getToken;
  }

  _handleFulfilled(config) {
    if (this._getToken) {
      const token = this._getToken();
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
    }
    return config;
  }

  // Set up the request unsuccessfully
  _handleRequestError(axiosError) {
    throw axiosError;
  }

  _handleSuccess(response) {
    return response.data;
  }
  // Set up the response unsuccessfully
  _handleResponseError(axiosError) {
    let error = {};

    // Network error
    if (!axiosError.response) {
      error = {
        errors: 'Network Error',
        message: 'Network Error',
        status_code: 600
      };
      throw error;
    }

    error = axiosError.response.data;

    // if (
    //   axiosError.config.url !== '/login' &&
    //   (error.status_code !== 400 || error.status_code !== 422)
    // ) {
    //   removeLocalStorage('auth');
    //   window.location.href = '/login';
    // }
    if (axiosError.config.url !== '/login' && error.status_code === 404) {
      // url not exits
      window.location.href = '/404';
    }

    if (
      axiosError.config.url !== '/login' &&
      (error.status_code === 500 || error.status_code === 401)
    ) {
      // error server serious
      removeLocalStorage('auth');
      window.location.href = '/login';
    }

    throw error;
  }

  get(url, params = {}) {
    return this._instance.get(url, { params });
  }

  post(url, body) {
    return this._instance.post(url, body);
  }

  put(url, body) {
    return this._instance.put(url, body);
  }

  delete(url) {
    return this._instance.delete(url);
  }
}

export default AxiosClient;
