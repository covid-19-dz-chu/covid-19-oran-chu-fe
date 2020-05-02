import axios from 'axios';

const options = {
  baseURL: 'http://covid-19-oran-chu.herokuapp.com',
};


const setTokenToRequest = (token) => {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = token;
  })
}



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