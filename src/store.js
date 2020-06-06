import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';

export const history = createBrowserHistory();

const myRouterMiddleware = routerMiddleware(history);

// Common middleware :
// Router ( inject router state on global store )
// Promise ,
// Local storage
const getMiddleware = () => {
  return applyMiddleware(
    myRouterMiddleware,
    promiseMiddleware,
    localStorageMiddleware,
    createLogger()
  );
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));
