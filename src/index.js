import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import Main from './components/Main';

// Learn more about service workers: https://bit.ly/CRA-PWA
// import { unregister } from './serviceWorker';
// unregister();

configure({
  enforceActions: 'always',
});

export default ReactDOM.render(
  <Main />,
  document.getElementById('root') || document.createElement('div')
);
