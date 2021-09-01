import { store } from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';

ReactDOM.render(
    <Main/>, document.getElementById("app")
);
//console.log('Store : ', store.getState());