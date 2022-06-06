import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Card, Button, CircularProgress } from '@material-ui/core';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';
import DeleteDialog from './DeleteDialog/DeleteDialog';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { selectGame } from '../../../../redux/activeGameSlice';
import { deleteGame } from '../../../../redux/gamesSlice';

function GameCards() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  const [openDelete, setOpenDelete] = useState(false)

  const handleDeleteConfirm = () => {
    setOpenDelete(true);
  }

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteGame(id));
    handleCloseDelete();
  }

  return (
    !games.games.length
      ?
      <>
        <CircularProgress />
        <p>{games.status}</p>
      </>
      :
      <>
        {
          !games.games.length ? <Typography>No Games</Typography> : (
            <Fragment>
              {games.games.map(game => (
                <Card variant="outlined" key={game._id}>
                  <Typography>GAME {games.games.indexOf(game) + 1}</Typography>
                  <Typography><GroupsRoundedIcon /> {game.players.map(player => player.name.toUpperCase()).join(', ')}</Typography>
                  <Typography><TerrainRoundedIcon /> {game.terrain.join(', ')}</Typography>
                  <Button onClick={() => dispatch(selectGame(game))}>
                    <AutoAwesomeRoundedIcon />
                    <Typography>Select Game</Typography>
                  </Button>
                  <DeleteDialog
                    handleDeleteConfirm={handleDeleteConfirm}
                    open={openDelete}
                    handleClose={handleCloseDelete}
                    deleteGame={() => handleDelete(game._id)}
                  />
                </Card>
              ))}
            </Fragment>
          )
        }
      </>
  )
}

export default GameCards;
