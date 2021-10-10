import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';

var ngui = require('nw.gui');
var nwin = ngui.Window.get();
nwin.maximize();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
