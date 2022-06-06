import React, { useState } from 'react';
import { Typography, Button, Drawer } from '@material-ui/core';
import GameCards from './GameCards/GameCards';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import SelectedGameInfo from './SelectedGameInfo/SelectedGameInfo';
import useStyles from './styles';
import TileDisplay from './TileDisplay/TileDisplay';

function GameToolbar() {
  const classes = useStyles();


  const [drawerOpen, setDrawerOpen] = useState(false);



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
        <SelectedGameInfo />
        <TileDisplay />
      </div>
      <Drawer open={drawerOpen} onClose={handleDrawerClose} >
        <Typography>MY GAMES</Typography>
        <GameCards />
      </Drawer>
    </div>
  )  
}

export default GameToolbar;