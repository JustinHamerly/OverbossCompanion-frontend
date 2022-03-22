import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Card } from '@material-ui/core';

function GameCards(props){

  const games = useSelector((state) => state.games);
  console.log(games); 

  return(
    <>
      {
        !games.length ? <Typography>No Games</Typography> : (
          <Fragment>
            {games[0].map(game => (
              <Card key={game._id}>
                <Typography>Players: {game.players.map(player => player.name + ' ') }</Typography>
                <Typography>Terrain Types: {game.terrain.map(type => type + ' ')}</Typography>
              </Card> 
            ))}
          </Fragment>
        )
      }
    </>
  )
}

export default GameCards;
