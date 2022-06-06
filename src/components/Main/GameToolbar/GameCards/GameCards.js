import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGame } from '../../../../redux/actions/games';
import { Typography, Card, Button, CircularProgress } from '@material-ui/core';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';
import DeleteDialog from './DeleteDialog/DeleteDialog';
import { deleteGame } from '../../../../redux/actions/games';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

function GameCards(props) {
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
    !games.length ? <CircularProgress /> :
      <>
        {
          !games.length ? <Typography>No Games</Typography> : (
            <Fragment>
              {games[0].map(game => (
                <Card variant="outlined" key={game._id}>
                  <Typography>GAME {games[0].indexOf(game) + 1}</Typography>
                  <Typography><GroupsRoundedIcon /> {game.players.map(player => player.name.toUpperCase()).join(', ')}</Typography>
                  <Typography><TerrainRoundedIcon /> {game.terrain.join(', ')}</Typography>
                  <Button onClick={() => { dispatch(selectGame(game)); }}>
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
