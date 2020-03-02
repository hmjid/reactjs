import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Ref from './App/Ref';
import * as serviceWorker from './serviceWorker';
const obj = {
  title:'Trop-Type',
  num:9,
  objs:{a:3},
  arr:[1,2,3]
}
ReactDOM.render(<><App {...obj}  /><Ref /></>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
