import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import Main from './components/Main';
import { Provider } from 'react-redux';
import {store} from './store';


// Learn more about service workers: https://bit.ly/CRA-PWA
// import { unregister } from './serviceWorker';
// unregister();

configure({
  enforceActions: 'always',
});

export default ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root') || document.createElement('div')
);
