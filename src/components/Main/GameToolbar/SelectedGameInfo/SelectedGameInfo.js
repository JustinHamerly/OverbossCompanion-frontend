import { Typography } from "@material-ui/core";
import {useSelector} from 'react-redux';

function SelectedGameInfo() {

  const selectedGame = useSelector((state) => state.activeGame);
  console.log(selectedGame);

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
        </>
        :
        <Typography>No Selected Game</Typography>
      }
    </div>
  )
}

export default SelectedGameInfo