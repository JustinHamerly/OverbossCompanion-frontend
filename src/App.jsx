import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

import { fetchAll } from './redux/gamesSlice';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import GamesDrawer from './components/Global/GamesDrawer'

function App() {

  const dispatch = useDispatch();

  const [gamesDrawerOpen, setGamesDrawerOpen] = useState(false);
  const handleGamesDrawerClose = () => setGamesDrawerOpen(false);
  
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header 
        setGamesDrawerOpen={setGamesDrawerOpen} 
      />
      <Main />

      <GamesDrawer 
        gamesDrawerOpen={gamesDrawerOpen} 
        handleGamesDrawerClose={handleGamesDrawerClose} 
      />
    </BrowserRouter>
  );

}

export default App;