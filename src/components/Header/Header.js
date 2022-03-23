import React, {useState} from 'react';
import { AppBar, Typography, Button } from '@material-ui/core';
import Games from './Games/Games';
import './Header.css';

function Header(props) {
  return (
    <AppBar position="static" color="inherit">
      <Games />
      <Typography variant="h2" align="center">Overboss Companion</Typography>
      <div>
        <Button>LOGIN</Button>
        <Button>USER</Button>
      </div>
    </AppBar>
  )  
}

export default Header;