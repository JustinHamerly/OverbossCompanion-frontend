import React, {useState} from 'react';
import { AppBar, Typography } from '@material-ui/core';
import Games from './Games/Games';

function Header(props) {

  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }


  return (
    <AppBar position="static" color="inherit">
      <Games 
        drawerOpen={drawerOpen} 
        setDrawerOpen={setDrawerOpen} 
        handleDrawerClose={handleDrawerClose} 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen} 
        handleModalClose={handleModalClose}
      />
      <Typography variant="h2" align="center">Overboss Companion</Typography>
    </AppBar>
  )  
}

export default Header;