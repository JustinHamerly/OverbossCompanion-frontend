import { Typography } from "@material-ui/core";
import {useSelector} from 'react-redux';

function SelectedGameInfo() {

  const selectedGame = useSelector((state) => state.selectedGame);
  console.log(selectedGame);

  return(
    <div>
      <Typography>Selected Game</Typography>
      {selectedGame.players ? 
        <>
          <Typography>Players: {selectedGame.players.map(player =>{
            return(
              <Typography>{player.name}</Typography>
            )
          })}</Typography>
          <Typography>Terrain Types:{selectedGame.terrain.map(terrain =>{
            return(
              <Typography>{terrain}</Typography>
            )
          })}</Typography>
        </>
        :
        <Typography>No Selected Game</Typography>
      }
    </div>
  )
}

export default SelectedGameInfo