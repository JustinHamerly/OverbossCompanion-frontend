import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static" color="inherit">
      <Typography variant="h2" align="center">Overboss Companion</Typography>
    </AppBar>
  )  
}

export default Header;