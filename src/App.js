import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { getGames } from './actions/games';

import Main from './components/Main/Main.js';
import Header from './components/Header/Header.js';

function App() {

  const dispatch = useDispatch();
  
  dispatch(getGames());

  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );

}

export default App;