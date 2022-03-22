import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import { Typography, Card, Button, Drawer } from '@material-ui/core';

function Games(props) {
  
  const games = useSelector((state) => state.games);
  console.log(games);

  return (
    <Fragment>
      <Typography variant="h4" align="center">Games</Typography>
      <Button onClick={() => props.setModalOpen(true)}>New Game</Button>
      <Button onClick={() => props.setDrawerOpen(true)}>My Games</Button>
      <Drawer open={props.drawerOpen} onClose={props.handleDrawerClose} >
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
      </Drawer>
    </Fragment>
  )  
}

export default Games;