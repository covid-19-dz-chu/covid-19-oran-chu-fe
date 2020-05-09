import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const options = {
  baseURL: BASE_API_URL,
};

export const setTokenToRequest = (token) => {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
  });
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
