import React, { useState } from 'react';

import { AppBar, Typography, Button } from '@material-ui/core';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import FortRoundedIcon from '@mui/icons-material/FortRounded';

import GamesDrawer from './GamesDrawer.js';
import NavMenu from './Menu.js';

import useStyles from './styles.js';

function Header(props) {
  const classes = useStyles();

  const [gamesDrawerOpen, setGamesDrawerOpen] = useState(false);
  const handleGamesDrawerClose = () => setGamesDrawerOpen(false);

  return (
    <AppBar position="static" color="inherit" className={classes.header}>



      <Button onClick={() => setGamesDrawerOpen(true)} className={classes.button}>
        <DoubleArrowRoundedIcon className={classes.myGamesIcon} />
        <Typography className={classes.myGamesText}>GAMES</Typography>
      </Button>

      <div className={classes.banner}>
        <FortRoundedIcon className={classes.castleIcon} />
        <Typography variant="h1" align="center" className={classes.h1}>
          Overboss Companion
        </Typography>
      </div>

      <NavMenu />

      <GamesDrawer gamesDrawerOpen={gamesDrawerOpen} handleGamesDrawerClose={handleGamesDrawerClose} />


    </AppBar>
  )
}

export default Header;