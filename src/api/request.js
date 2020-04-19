import axios from 'axios';
import Axios from 'axios';

const options = {
  baseURL: 'https://covid-19-oran-chu.herokuapp.com',
  token : '',
};


const setToken = (token) => {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = token;
  })
}

Axios.defaults.


export default {
  get: (url) => {
    return axios.get(`${options.baseURL}/${url}`); 
  },
  post: (url, body) => {
    return axios.post(`${options.baseURL}/${url}`,body);
  },
  put: (url, body) => {
    return axios.put(`${options.baseURL}/${url}`, body);
  },
  delete:() => {
    return axios.delete()
  }
}