import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';

function Games() {
  
  const games = useSelector((state) => state.games);

  return (
    <Paper>
      <Typography variant="h4" align="center">{games}</Typography>
    </Paper>
  )  
}

export default Games;