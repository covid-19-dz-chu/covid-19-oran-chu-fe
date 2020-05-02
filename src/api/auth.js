import requests from './request';
import { loginWithEmailAndPassword } from './firebase';

export default {
  login: async (email, password) => {
    return loginWithEmailAndPassword(email, password);
  },
  signup: () => {
    return requests.post('signup');
  },
  setToken: (token) => {
    localStorage.setItem('token', token);
  },
};
