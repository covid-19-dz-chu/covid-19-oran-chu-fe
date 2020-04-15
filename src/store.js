import { createStore } from 'redux';
import reducer from './reducer';
import { dispatch } from 'react-redux';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();


export const store = createStore(
  reducer
)