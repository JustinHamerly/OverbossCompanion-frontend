import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import App from './App';

import activeGameReducer from './redux/activeGameSlice';
import gamesReducer from './redux/gamesSlice';

const store = configureStore({
  reducer: {
    activeGame: activeGameReducer,
    games: gamesReducer
  }
});


const printCurrentState = () => {
  const state = store.getState();
  console.log(state);
}
 
store.subscribe(printCurrentState);

ReactDOM.render(
  <Provider store={store} >
    <App /> 
  </Provider>,
  document.getElementById('root')
);
