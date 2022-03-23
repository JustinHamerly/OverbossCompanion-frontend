import React from 'react';
import { AppBar, Typography, Button } from '@material-ui/core';
import Games from './Games/Games';
import useStyles from './styles';

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit" className={classes.header}>
      <Games />
      <Typography variant="h1" align="center" className={classes.h1}>Overboss Companion</Typography>
      <div>
        <Button className={classes.button}>LOGIN</Button>
        <Button className={classes.button}>USER</Button>
      </div>
    </AppBar>
  )  
}

export default Header;