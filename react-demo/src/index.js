import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD:antd-demo/src/index.js
import IRouter from './router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<IRouter />, document.getElementById('root'));
=======
// import App from './App';
import Router from './router';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
>>>>>>> 9a418c48e8fddd171fd92835defdf0f3875d69e9:react-demo/src/index.js

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
