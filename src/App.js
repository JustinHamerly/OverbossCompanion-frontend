import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAll } from './redux/gamesSlice';

import {BrowserRouter} from 'react-router-dom'

import Main from './components/Main';
import Header from './components/Header/Header';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );

}

export default App;