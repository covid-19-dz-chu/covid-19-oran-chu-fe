import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './reducers/app';
import home from './reducers/home';
import synthesis from './reducers/synthesis';
import login from './reducers/login';
import signup from './reducers/signup';

export default combineReducers({
  app,
  home,
  synthesis,
  login,
  signup,
  routerReducer,
});
