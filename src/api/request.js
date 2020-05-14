import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const options = {
  baseURL: BASE_API_URL,
};

export const setTokenRequest = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeTokenRequest = () => {
  axios.defaults.headers.common["Authorization"] = '';
};

export default {
  get: (url) => {
    return axios.get(`${options.baseURL}/${url}`);
  },
  post: (url, body) => {
    return axios.post(`${options.baseURL}/${url}`, body);
  },
  put: (url, body) => {
    return axios.put(`${options.baseURL}/${url}`, body);
  },
};
