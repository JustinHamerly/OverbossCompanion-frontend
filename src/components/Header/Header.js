import React from 'react';
import { AppBar } from '@material-ui/core';

import GamesDrawerButton from './HeaderComponents/GamesDrawerButton';
import Banner from './HeaderComponents/Banner';
import NavMenu from './HeaderComponents/Menu';

import useStyles from './styles/headerStyles.js';

function Header({ setGamesDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit" className={classes.header}>

      <GamesDrawerButton 
        setGamesDrawerOpen={setGamesDrawerOpen}
      />
      <Banner />
      <NavMenu />

    </AppBar>
  )
}

export default Header;