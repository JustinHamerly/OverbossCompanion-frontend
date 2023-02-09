import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, Paper } from '@material-ui/core'

import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import useStyles from './styles/gameCardStyles'

const GameCard = ({game, idx, selectGame, handleDeleteConfirm}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Typography className={classes.header}>GAME {idx + 1}</Typography>
      <Typography className={classes.sectionHeader}><GroupsRoundedIcon fontSize={'large'}/></Typography>
      {game.players.map(player => (
        <Typography className={classes.text}>{player.name.toUpperCase()}</Typography>
      ))}
      <Typography className={classes.sectionHeader}><TerrainRoundedIcon fontSize={'large'}/></Typography>
      {game.terrain.map(t=> (
        <Typography className={classes.text}>{t.toUpperCase()}</Typography>
      ))}
      <Paper className={classes.buttonMenu}>
        <Button onClick={() => dispatch(selectGame(game))} className={classes.button}>
          <AutoAwesomeRoundedIcon />
          SELECT
        </Button>
        <Button onClick={() => handleDeleteConfirm(game._id)} className={classes.button}>
          <DeleteForeverRoundedIcon />
        </Button>
      </Paper>
    </div>
  )
}

export default GameCard