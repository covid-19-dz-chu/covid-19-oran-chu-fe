import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { store } from './store';


export default ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root') || document.createElement('div')
);
