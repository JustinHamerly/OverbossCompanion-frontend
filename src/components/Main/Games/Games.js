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
        !games.length ? <Typography>No Games</Typography> : (
          <Paper>
            {games.map(game => (
              <Card key={game._id}>
                <Typography>Players: {game.players.map(player => player.name + ' ') }</Typography>
                <Typography>Terrain Types: {game.terrain.map(type => type + ' ')}</Typography>
              </Card> 
            ))}
          </Paper>
        )
      }
    </Paper>
  )  
}

export default Games;