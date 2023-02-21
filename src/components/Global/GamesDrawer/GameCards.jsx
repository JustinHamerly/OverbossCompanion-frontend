import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, CircularProgress } from '@material-ui/core';

import { selectGame, clearActive } from '../../../redux/activeGameSlice';
import { removeGame } from '../../../redux/gamesSlice';

import GameCard from './GameCard';
import DeleteDialog from '../../Main/DeleteDialog';
import NewGameButton from './NewGameButton'

import useStyles from './styles/gameCardsStyles'

function GameCards(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const selectedGame = useSelector(state => state.activeGame)

  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

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
    if (deleteId === selectedGame.data._id) {
      dispatch(clearActive())
    }
    handleCloseDelete();
  }

  const selectGameAndClose = (game) => {
    const gameObj = {...game};
    dispatch(selectGame(gameObj));
    props.handleDrawerClose();
  }

  return (
    <div className={classes.container}>
      <NewGameButton handleDrawerClose={props.handleDrawerClose} />
      {
        !games.status === 'loading games'
          ?
          <div className={classes.loading}>
            <CircularProgress />
            <Typography className={classes.statusText}>LOADING...</Typography>
          </div>
          :
          <div>
            {
              !games.games.length
                ?
                <Typography className={classes.statusText}>NO GAMES</Typography>
                :
                <div>
                  {games.games.map((game, idx) => (
                    <GameCard
                      game={game}
                      key={game._id}
                      idx={idx}
                      openDelete={openDelete}
                      selectGame={selectGameAndClose}
                      handleDeleteConfirm={handleDeleteConfirm}
                    />
                  ))}
                  <DeleteDialog
                    handleDeleteConfirm={handleDeleteConfirm}
                    open={openDelete}
                    handleClose={handleCloseDelete}
                    deleteGame={handleDeleteGame}
                  />
                </div>
            }
          </div>
      }
    </div>
  )
}

export default GameCards;
