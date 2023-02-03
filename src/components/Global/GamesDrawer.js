import React from 'react'
import { Drawer, Typography } from '@material-ui/core';

import GameCards from './GameCards'

const GamesDrawer = ({ gamesDrawerOpen, handleGamesDrawerClose }) => {
  return (
    <Drawer open={gamesDrawerOpen} onClose={handleGamesDrawerClose} >
      <Typography>MY GAMES</Typography>
      <GameCards handleDrawerClose={handleGamesDrawerClose} />
    </Drawer>
  )
}

export default GamesDrawer