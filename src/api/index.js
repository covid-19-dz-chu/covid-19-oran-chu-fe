import axios from 'axios';

const options = {
  baseURL: 'http://localhost:4000',
};

const myAxios = axios.create(options);

myAxios.defaults.timeout = 2500;

const { CancelToken } = myAxios;

const cancellation = () => ({
  cancelToken: new CancelToken(function executor(canceller) {
    const cancel = canceller;
  }),
});

export default {
  get: (url) => {
    return myAxios.get(`${options.baseURL}/${url}`, cancellation); 
  },
  post: (url, body) => {
    return myAxios.post(`${options.baseURL}/${url}`,body, cancellation);
  },
  put: (url, body) => {
    return myAxios.put(`${options.baseURL}/${url}`, body, cancellation);
  },
  delete:() => {
    return myAxios.delete()
  }
}