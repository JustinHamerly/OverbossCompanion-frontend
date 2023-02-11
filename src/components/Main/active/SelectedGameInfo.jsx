import { Typography, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';



import { saveActiveGame, undoPick } from '../../../redux/activeGameSlice'
import GameInfo from "./GameInfo";

import useStyles from './styles/selectedGameInfoStyles'
import TokenInfo from "./TokenInfo";

function SelectedGameInfo(props) {
  const classes = useStyles()
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.activeGame);
  const [undoDisabled, setUndoDisabled] = useState(true);

  useEffect(() => {
    if (selectedGame.history.length) {
      setUndoDisabled(false);
    } else {
      setUndoDisabled(true)
    }
  }, [selectedGame])


  return (
    <>
      {selectedGame.data._id ?
        <div className={classes.container}>
          <GameInfo />
          <TokenInfo />
          <Button
            onClick={() => dispatch(saveActiveGame(selectedGame.data))}
          >
            Save Game
          </Button>
          <Button
            disabled={undoDisabled}
            onClick={() => dispatch(undoPick(selectedGame.data))}
          >
            Undo
          </Button>
        </div>
        :
        null
      }
    </>
  )
}

export default SelectedGameInfo