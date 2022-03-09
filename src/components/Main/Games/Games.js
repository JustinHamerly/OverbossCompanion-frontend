import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography, Card } from '@material-ui/core';

function Games() {
  
  const games = useSelector((state) => state.games);

  return (
    <Paper>
      <Typography variant="h4" align="center">Games</Typography>
      {
        games.forEach(game => {
          return(
            <Card key={game.id}>
              <Typography variant="h5">{game.owner}</Typography>
            </Card>
          )
        })
      }
    </Paper>
  )  
}

export default Games;