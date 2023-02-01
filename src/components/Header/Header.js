import React, { useState } from 'react';

import { AppBar, Typography, Button, Drawer } from '@material-ui/core';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';

import GameCards from '../GameCards';
import NavMenu from './Menu.js';

import useStyles from './styles.js';

function Header(props) {
  const classes = useStyles();
  
  const [gamesDrawerOpen, setGamesDrawerOpen] = useState(false);
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

  const handleGamesDrawerClose = () => setGamesDrawerOpen(false);
  const handleProfileDrawerClose = () => setProfileDrawerOpen(false);

  return (
    <AppBar position="static" color="inherit" className={classes.header}>

      <div className={classes.buttonInterface}>

        <Button onClick={() => setGamesDrawerOpen(true)} className={classes.button}>
          <DoubleArrowRoundedIcon />
          MY GAMES
        </Button>

        <Button onClick={() => setProfileDrawerOpen(true)} className={classes.button}>
          <DoubleArrowRoundedIcon />
          LOGIN
        </Button>

      </div>

      <div className={classes.banner}>

        <Typography variant="h1" align="center" className={classes.h1}>Overboss Companion</Typography>

      </div>

      <NavMenu />

      

      <Drawer open={gamesDrawerOpen} onClose={handleGamesDrawerClose} >
        <Typography>MY GAMES</Typography>
        <GameCards handleDrawerClose={handleGamesDrawerClose} />
      </Drawer>

      <Drawer open={profileDrawerOpen} onClose={handleProfileDrawerClose} >
        <Button onClick={() => handleProfileDrawerClose()} >
          CLOSE
        </Button>
        <Typography>LOGIN COMPONENT / PROFILE & LOGOUT COMPONENT</Typography>
      </Drawer>

    </AppBar>
  )
}

export default Header;