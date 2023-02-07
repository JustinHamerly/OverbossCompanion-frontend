import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Typography, Button } from '@material-ui/core'

import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const GameCard = ({game, idx, openDelete, selectGame, handleDeleteConfirm}) => {
  const dispatch = useDispatch();
  return (
    <Card variant="outlined">
      <Typography>GAME {idx + 1}</Typography>
      <Typography><GroupsRoundedIcon /> {game.players.map(player => player.name.toUpperCase()).join(', ')}</Typography>
      <Typography><TerrainRoundedIcon /> {game.terrain.join(', ')}</Typography>
      <Button onClick={() => dispatch(selectGame(game))}>
        <AutoAwesomeRoundedIcon />
        <Typography>Select Game</Typography>
      </Button>
      <Button onClick={() => handleDeleteConfirm(game._id)}>
        <DeleteForeverRoundedIcon />
        <Typography>DELETE GAME</Typography>
      </Button>
    </Card>
  )
}

export default GameCard