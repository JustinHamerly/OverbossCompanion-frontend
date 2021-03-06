import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Card, Button, CircularProgress } from '@material-ui/core';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';
import DeleteDialog from './DeleteDialog/DeleteDialog';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { selectGame, clearActive } from '../../../../redux/activeGameSlice';
import { removeGame } from '../../../../redux/gamesSlice';
import Form from './NewGameForm/NewGameForm';

function GameCards() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const selectedGame = useSelector(state => state.activeGame)

  const [openDelete, setOpenDelete] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const handleModalClose = () => {
    setModalOpen(false);
  }

  const handleDeleteConfirm = (id) => {
    setOpenDelete(true);
    setDeleteId(id);
  }

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setDeleteId(null);
  };

  const handleDeleteGame = () => {
    dispatch(removeGame(deleteId));
    if(deleteId === selectedGame.data._id){
      dispatch(clearActive())
    }
    handleCloseDelete();
  }

  return (
    !games.status === 'loading games'
      ?
      <>
        <CircularProgress />
        <p>Loading Games</p>
      </>
      :
      <React.Fragment>
        <Button onClick={() => setModalOpen(true)} >
          <AddCircleRoundedIcon />
          New Game
        </Button>
        {
          !games.games.length ?
            <Typography>NO GAMES</Typography>
            :
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
                  <p>{game._id}</p>
                  <Button onClick={() => handleDeleteConfirm(game._id)}>
                    <DeleteForeverRoundedIcon />
                    <Typography>DELETE GAME</Typography>
                  </Button>
                  <DeleteDialog
                    handleDeleteConfirm={handleDeleteConfirm}
                    open={openDelete}
                    handleClose={handleCloseDelete}
                    deleteGame={handleDeleteGame}
                  />
                </Card>
              ))}
            </Fragment>
        }
        <Form modalOpen={modalOpen} setModalOpen={setModalOpen} handleModalClose={handleModalClose} />
      </React.Fragment>
  )
}

export default GameCards;
