import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import GameInfo from "./GameInfo";
import TokenInfo from "./TokenInfo";
import GameButtons from "./GameButtons";

import useStyles from './styles/selectedGameInfoStyles'

function SelectedGameInfo(props) {
  const classes = useStyles()

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
          <GameButtons undoDisabled={undoDisabled} />
        </div>
        :
        null
      }
    </>
  )
}

export default SelectedGameInfo