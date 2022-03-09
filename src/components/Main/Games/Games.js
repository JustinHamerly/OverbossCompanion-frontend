import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography, Card, Button } from '@material-ui/core';

function Games(props) {
  
  const games = useSelector((state) => state.games);
  console.log(games);

  return (
    <Paper>
      <Typography variant="h4" align="center">Games</Typography>
      <Button onClick={() => props.setModalOpen(true)}>New Game</Button>
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