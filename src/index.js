import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { configure } from 'mobx';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { store } from './store';

configure({
  enforceActions: 'always',
});

export default ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter>
      <Main />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') || document.createElement('div')
);
