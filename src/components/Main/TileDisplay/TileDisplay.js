import { Container, Paper, Typography, Button } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { pickAndUpdate } from "../../../redux/actions/games";


function TileDisplay() {
  const dispatch = useDispatch();
  let selectedGame = useSelector((state) => state.selectedGame)

  const handlePick = (idx) => {
    let gameToUpdate = selectedGame;
    const selectedToken = gameToUpdate.display[idx].token;
    const selectedTile = gameToUpdate.display[idx].tile;
    let lastPlayer = gameToUpdate.players.shift();
    lastPlayer.tiles.push(selectedTile);
    lastPlayer.tokens.push(selectedToken);
    const newToken = gameToUpdate.tokenPool.pop();
    const newTile = gameToUpdate.tilePool.pop();
    const newPair = {
      token: newToken,
      tile: newTile,
    }
    gameToUpdate.players.push(lastPlayer)
    gameToUpdate.display.shift()
    gameToUpdate.display.push(newPair);
    console.log(gameToUpdate);
    dispatch(pickAndUpdate(gameToUpdate));
  
  }

  return (
    <Container id="display">
      {selectedGame.display ?
        selectedGame.display.map((set, idx) => (
          <Paper key={idx}>
            <Typography>Tile: {set.tile.tileName}</Typography>
            <Typography>{selectedGame.display.indexOf(set)}</Typography>
            <img src={set.tile.tileImg} alt={set.tile.tileName}></img>
            <Typography>Token: {set.token.tokenName}</Typography>
            <img src={set.token.tokenImg} alt={set.tile.tileName}></img>
            <Button onClick={() => { handlePick(selectedGame.display.indexOf(set)) }}>Pick Pair</Button>
          </Paper>
        ))
        :
        <Typography>No Selected Game</Typography>}
    </Container>
  )
}

export default TileDisplay