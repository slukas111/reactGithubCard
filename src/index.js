import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App title="The Github Cards App"/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
