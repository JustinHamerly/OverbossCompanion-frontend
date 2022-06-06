import { Typography, Button } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { saveActiveGame } from '../../../../redux/activeGameSlice'

function SelectedGameInfo() {
  
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.activeGame);

  return(
    <div>
      {selectedGame.players ? 
        <>
          <Typography>Selected Game</Typography>
          <Typography>Players: {selectedGame.players.map(player => player.name).join(', ')}</Typography>
          <Typography>Terrain Types:{selectedGame.terrain.join(', ')}</Typography>
          <Typography>Tile Pool: {selectedGame.tilePool.length} tiles left</Typography>
          <Typography>Token Pool: {selectedGame.tokenPool.length} tiles left</Typography>
          <Typography>Player Turn: {selectedGame.players[0].name}</Typography>
          <Button onClick={() => dispatch(saveActiveGame(selectedGame))}>Save Game</Button>
        </>
        :
        <Typography>No Selected Game</Typography>
      }
    </div>
  )
}

export default SelectedGameInfo