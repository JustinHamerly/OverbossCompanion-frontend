import React from 'react'
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core'

import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';

import useStyles from './styles/gameInfoStyles'

const GameInfo = () => {
  const classes = useStyles();
  const selectedGame = useSelector((state) => state.activeGame);

  return (
    <div className={classes.gameInfoContainer}>
      <Typography className={classes.header}>
        GAME INFO
      </Typography>
      <GroupsRoundedIcon fontSize={'medium'} />
      {selectedGame.data.players.map(player => (
        <Typography className={classes.text}>
          {player.name}
        </Typography>
      ))}
      <TerrainRoundedIcon fontSize={'medium'} />
      {selectedGame.data.terrain.map(t => (
        <Typography className={classes.text}>
          {t}
        </Typography>
      ))}
    </div>
  )
}

export default GameInfo