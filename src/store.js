import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

// Common middleware : 
// Router ( inject router state on global store )
// Promise , 
// Local storage  
const getMiddleware = () => {
  return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
};

export const store = createStore(
  reducer, composeWithDevTools(getMiddleware())
);