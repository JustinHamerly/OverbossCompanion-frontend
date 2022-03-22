import React from 'react';
import { Paper, Typography, Button, Drawer } from '@material-ui/core';
import GameCards from './GameCards.js/GameCards';

function Games(props) {

  return (
    <Paper>
      <Typography variant="h4" align="center">Games</Typography>
      <Button onClick={() => props.setModalOpen(true)}>New Game</Button>
      <Button onClick={() => props.setDrawerOpen(true)}>My Games</Button>
      <Drawer open={props.drawerOpen} onClose={props.handleDrawerClose} >
        <GameCards />
      </Drawer>
    </Paper>
  )  
}

export default Games;