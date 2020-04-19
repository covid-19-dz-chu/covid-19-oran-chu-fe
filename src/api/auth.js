import requests from './request';




export default {
  login: (email , password) => {
    return requests.post('login');
  },
  signup: (email , password) => {
      return requests.post('signup');
  },
  setToken : (token) => {
    localStorage.setItem('token' , token);
  }
}


