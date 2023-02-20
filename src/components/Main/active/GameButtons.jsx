import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';

import { saveActiveGame, undoPick } from '../../../redux/activeGameSlice'

const GameButtons = ({undoDisabled}) => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.activeGame);

  return (
    <div>
      <Button
        onClick={() => dispatch(saveActiveGame(selectedGame.data))}
      >
        <SaveIcon />SAVE
      </Button>
      <Button
        disabled={undoDisabled}
        onClick={() => dispatch(undoPick(selectedGame.data))}
      >
        <UndoIcon />Undo
      </Button>
    </div>
  )
}

export default GameButtons