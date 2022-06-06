import { useSelector, useDispatch } from 'react-redux';
import { Container, Paper, Typography, Button } from "@material-ui/core";

import { pickAndUpdate } from "../../../redux/actions/games";


function TileDisplay() {
  const dispatch = useDispatch();
  let selectedGame = useSelector((state) => state.selectedGame)

  const handlePick = (idx) => {
    let gameToUpdate = selectedGame;
    const selectedToken = gameToUpdate.display[idx].token;
    const selectedTile = gameToUpdate.display[idx].tile;
    handlePlayerChanges(gameToUpdate, selectedToken, selectedTile);
    handleDisplayChanges(gameToUpdate);
    console.log(gameToUpdate)
    dispatch(pickAndUpdate(gameToUpdate));
  }

  const handlePlayerChanges = (game, tile, token) => {
    let lastPlayer = game.players.shift();
    lastPlayer.tiles.push(tile);
    lastPlayer.tokens.push(token);
    game.players.push(lastPlayer);
  }

  const handleDisplayChanges = (game) => {
    const newToken = game.tokenPool.pop();
    const newTile = game.tilePool.pop();
    const newPair = {
      token: newToken,
      tile: newTile,
    }
    game.display.shift()
    game.display.push(newPair);
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