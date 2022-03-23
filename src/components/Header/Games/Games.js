import React, { useState } from 'react';
import { Typography, Button, Drawer } from '@material-ui/core';
import GameCards from './GameCards/GameCards';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Form from './NewGameForm/NewGameForm'

function Games() {

  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  return (
    <div>
      <Button onClick={() => setDrawerOpen(true)}>
        <DoubleArrowRoundedIcon />
        MY GAMES
      </Button>
      <Button onClick={() => setModalOpen(true)}>
        <AddCircleRoundedIcon />
        New Game
      </Button>
      <Drawer open={drawerOpen} onClose={handleDrawerClose} >
        <Typography>MY GAMES</Typography>
        <GameCards />
      </Drawer>
      <Form modalOpen={modalOpen} setModalOpen={setModalOpen} handleModalClose={handleModalClose} />
    </div>
  )  
}

export default Games;