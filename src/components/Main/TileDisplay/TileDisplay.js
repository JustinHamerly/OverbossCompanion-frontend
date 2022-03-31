import { Container, Paper, Typography, Button } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { pickAndUpdate } from "../../../redux/actions/games";


function TileDisplay(){
  const selectedGame = useSelector((state) => state.selectedGame);
  const dispatch = useDispatch();

  const handlePick = (idx) => {
    console.log(idx)

    let payload = {
      idx: idx,
      game: selectedGame
    }

    dispatch(pickAndUpdate(payload));
    
  }

  return(
    <Container id="display">
      {selectedGame.display ?
        selectedGame.display.map(set => {
          return(
            <Paper key={selectedGame.display.indexOf(set)}>
              <Typography>Tile: {set.tile.tileName}</Typography>
              <img src={set.tile.tileImg} alt={set.tile.tileName}></img>
              <Typography>Token: {set.token.tokenName}</Typography>
              <img src={set.token.tokenImg} alt={set.tile.tileName}></img>
              <Button onClick={()=>{handlePick(selectedGame.display.indexOf(set))}}>Pick Pair</Button>
            </Paper>
          )
        })
      :
      <Typography>No Selected Game</Typography>}
    </Container>
  )
}

export default TileDisplay