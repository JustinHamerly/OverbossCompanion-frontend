import { Typography, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { saveActiveGame, undoPick } from '../../../redux/activeGameSlice'

function SelectedGameInfo(props) {
  
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.activeGame);
  const [undoDisabled, setUndoDisabled] = useState(true);

  useEffect(() => {
    if(selectedGame.history.length){
      setUndoDisabled(false);
    }else{
      setUndoDisabled(true)
    }
  }, [selectedGame])
  

  return(
    <div>
      {selectedGame.data._id ? 
        <>
          <Typography>Selected Game</Typography>
          <Typography>Players: {selectedGame.data.players.map(player => player.name).join(', ')}</Typography>
          <Typography>Terrain Types:{selectedGame.data.terrain.join(', ')}</Typography>
          <Typography>Tile Pool: {selectedGame.data.tilePool.length} tiles left</Typography>
          <Typography>Token Pool: {selectedGame.data.tokenPool.length} tiles left</Typography>
          <Typography>Player Turn: {selectedGame.data.players[0].name}</Typography>
          <Button onClick={() => dispatch(saveActiveGame(selectedGame.data))}>Save Game</Button>
          <Button disabled={undoDisabled} onClick={() => dispatch(undoPick(selectedGame.data))}>Undo</Button>
        </>
        :
        null
      }
    </div>
  )
}

export default SelectedGameInfo