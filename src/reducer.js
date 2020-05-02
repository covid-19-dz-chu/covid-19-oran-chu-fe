import { combineReducers } from 'redux';
import app from './reducer/app';
import home from './reducer/home';
import auth from './reducer/auth';
import login from './reducer/login';
import signup from './reducer/signup';

export default combineReducers({
  app,
  home,
  auth,
  login,
  signup,
})