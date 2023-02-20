import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';

import { saveActiveGame, undoPick } from '../../../redux/activeGameSlice'

import useStyles from './styles/gameButtons';

const GameButtons = ({undoDisabled}) => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.activeGame);
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Button
        onClick={() => dispatch(saveActiveGame(selectedGame.data))}
        className={classes.button}
      >
        <SaveIcon />SAVE
      </Button>
      <Button
        disabled={undoDisabled}
        onClick={() => dispatch(undoPick(selectedGame.data))}
        className={classes.button}
      >
        <UndoIcon />Undo
      </Button>
    </div>
  )
}

export default GameButtons