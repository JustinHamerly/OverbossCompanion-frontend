import React from 'react';
import { AppBar, Typography, Button } from '@material-ui/core';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import FortRoundedIcon from '@mui/icons-material/FortRounded';

import NavMenu from './HeaderComponents/Menu';

import useStyles from './styles/headerStyles.js';

function Header({ setGamesDrawerOpen }) {
  const classes = useStyles();

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


    </AppBar>
  )
}

export default Header;