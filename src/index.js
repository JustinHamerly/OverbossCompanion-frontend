import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { Auth0Provider } from "@auth0/auth0-react";

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
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store} >
        <App /> 
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);
