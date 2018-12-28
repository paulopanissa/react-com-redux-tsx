import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App/App';
import Hello from "./Hello/Hello";
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import HelloReducer from "./Hello/HelloReducer";

const store = createStore(HelloReducer);

const fnRender = () => ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);

fnRender();
store.subscribe(fnRender)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
