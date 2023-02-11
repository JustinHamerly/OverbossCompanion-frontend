import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

import { fetchAll } from './redux/gamesSlice';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import GamesDrawer from './components/Global/GamesDrawer/GamesDrawer'

import useStyles from './components/Global/styles/app.js'

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [gamesDrawerOpen, setGamesDrawerOpen] = useState(false);
  const handleGamesDrawerClose = () => setGamesDrawerOpen(false);
  
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header 
          setGamesDrawerOpen={setGamesDrawerOpen} 
        />
        <Main />

        <GamesDrawer 
          gamesDrawerOpen={gamesDrawerOpen} 
          handleGamesDrawerClose={handleGamesDrawerClose} 
        />
      </div>
    </BrowserRouter>
  );

}

export default App;