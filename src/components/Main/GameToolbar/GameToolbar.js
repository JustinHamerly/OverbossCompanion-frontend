import React, { useState } from 'react';
import { Typography, Button, Drawer } from '@material-ui/core';
import GameCards from './GameCards/GameCards';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Form from './NewGameForm/NewGameForm';
import SelectedGameInfo from './SelectedGameInfo/SelectedGameInfo';
import useStyles from './styles';;

function GameToolbar() {
  const classes = useStyles();

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

      <div className={classes.toolbar}>
        <Button onClick={() => setDrawerOpen(true)} className={classes.button}>
          <DoubleArrowRoundedIcon />
          MY GAMES
        </Button>
        <Button onClick={() => setModalOpen(true)} className={classes.button}>
          <AddCircleRoundedIcon />
          New Game
        </Button>
        <SelectedGameInfo />
      </div>

      <Drawer open={drawerOpen} onClose={handleDrawerClose} >
        <Typography>MY GAMES</Typography>
        <GameCards />
      </Drawer>
      <Form modalOpen={modalOpen} setModalOpen={setModalOpen} handleModalClose={handleModalClose} />
    </div>
  )  
}

export default GameToolbar;