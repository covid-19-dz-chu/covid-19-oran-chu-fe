import requests from './request';
import { loginWithEmailAndPassword } from './firebase';

export default {
  login: async (email, password) => {
    return loginWithEmailAndPassword(email, password);
  },
  signup: (email, password) => {
    return requests.post('api/v1/auth/signup' , { email ,password });
  },
};
