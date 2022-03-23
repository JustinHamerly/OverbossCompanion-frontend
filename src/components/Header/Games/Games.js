import React from 'react';
import { Paper, Typography, Button, Drawer } from '@material-ui/core';
import GameCards from './GameCards/GameCards';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Form from './NewGameForm/NewGameForm'

function Games(props) {

  return (
    <Paper>
      <Typography variant="h4" align="center">Games</Typography>
      <Button onClick={() => props.setDrawerOpen(true)}>
        <DoubleArrowRoundedIcon />
        MY GAMES
      </Button>
      <Button onClick={() => props.setModalOpen(true)}>
        <AddCircleRoundedIcon />
        New Game
      </Button>
      <Drawer open={props.drawerOpen} onClose={props.handleDrawerClose} >
        <Typography>MY GAMES</Typography>
        <GameCards />
      </Drawer>
      <Form modalOpen={props.modalOpen} setModalOpen={props.setModalOpen} handleModalClose={props.handleModalClose} />
    </Paper>
  )  
}

export default Games;