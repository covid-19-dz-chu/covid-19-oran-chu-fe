import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app';
import home from './home';
import auth from './auth';
import login from './login';
import signup from './signup';

export default combineReducers({
  app,
  home,
  auth,
  login,
  signup,
  routerReducer,
});
