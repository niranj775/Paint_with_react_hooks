import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Playground from "./Playground"
import Paint from "./Paint";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Playground /> */}
    <Paint />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
