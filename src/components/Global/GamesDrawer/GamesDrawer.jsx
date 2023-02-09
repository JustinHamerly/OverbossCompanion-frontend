import React from 'react'
import { Drawer, Typography } from '@material-ui/core';

import DrawerCloseButton from './DrawerCloseButton';
import GameCards from './GameCards'

import useStyles from './styles/gamesDrawerStyles';

const GamesDrawer = ({ gamesDrawerOpen, handleGamesDrawerClose }) => {
  const classes = useStyles();

  return (
    <Drawer open={gamesDrawerOpen} onClose={handleGamesDrawerClose}>
      <div className={classes.drawerHeader}>
        <Typography className={classes.drawerTitle}>MY GAMES</Typography>
        <DrawerCloseButton handleDrawerClose={handleGamesDrawerClose} />
      </div>
      <GameCards handleDrawerClose={handleGamesDrawerClose} />
    </Drawer>
  )
}

export default GamesDrawer