import requests from './index';

export default {
  login: (email , password) => {
    return requests.post('login');
  },
  signup: (email , password) => {
      return requests.post('signup');
  },
}


