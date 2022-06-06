import React, { useState } from 'react';

import { AppBar, Typography, Button, Drawer } from '@material-ui/core';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';

import useStyles from './styles';

import GameCards from '../Main/GameToolbar/GameCards/GameCards';

function Header(props) {
  const classes = useStyles();
  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  return (
    <AppBar position="static" color="inherit" className={classes.header}>
      <Button onClick={() => setDrawerOpen(true)} className={classes.button}>
        <DoubleArrowRoundedIcon />
        MY GAMES
      </Button>
      <div>
        <Typography variant="h1" align="center" className={classes.h1}>Overboss Companion</Typography>
      </div>
      <div>
        <Button className={classes.button}>LOGIN</Button>
        <Button className={classes.button}>USER</Button>
      </div>
      <Drawer open={drawerOpen} onClose={handleDrawerClose} >
        <Typography>MY GAMES</Typography>
        <GameCards />
      </Drawer>
    </AppBar>
  )
}

export default Header;