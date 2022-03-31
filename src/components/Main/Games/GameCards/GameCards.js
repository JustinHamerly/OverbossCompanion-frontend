import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGame } from '../../../../redux/actions/games';
import { Typography, Card, Button, CircularProgress } from '@material-ui/core';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';

function GameCards(props){
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  console.log(games); 
  return(
    !games.length ? <CircularProgress/> :
    <>
      {
        !games.length ? <Typography>No Games</Typography> : (
          <Fragment>
            {games[0].map(game => (
              <Card variant="outlined" key={game._id}>
                <Typography>GAME {games[0].indexOf(game) +1}</Typography>
                <Typography><GroupsRoundedIcon /> {game.players.map(player => player.name.toUpperCase()).join(', ') }</Typography>
                <Typography><TerrainRoundedIcon /> {game.terrain.join(', ')}</Typography>
                <Button onClick={() => {}}>
                  <DeleteForeverRoundedIcon/>
                  <Typography>DELETE GAME</Typography>
                </Button>
                <Button onClick={() => {dispatch(selectGame(game));}}>
                  <DeleteForeverRoundedIcon/>
                  <Typography>Select Game</Typography>
                </Button>
              </Card> 
            ))}
          </Fragment>
        )
      }
    </>
  )
}

export default GameCards;
