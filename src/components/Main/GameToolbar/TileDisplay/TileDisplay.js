import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography } from "@material-ui/core";
import TileTokenPair from './TileTokenPair/TileTokenPair';
import { pickAndUpdate } from "../../../../redux/activeGameSlice";


function TileDisplay(props) {
  const dispatch = useDispatch();
  let selectedGame = useSelector((state) => state.activeGame)

  const handlePick = (idx) => {
    let gameToUpdate = JSON.parse(JSON.stringify(selectedGame.data));
    const selectedToken = gameToUpdate.display[idx].token;
    const selectedTile = gameToUpdate.display[idx].tile;
    handlePlayerChanges(gameToUpdate, selectedToken, selectedTile);
    handleDisplayChanges(gameToUpdate, idx);
    dispatch(pickAndUpdate(gameToUpdate));
  }

  const handlePlayerChanges = (game, tile, token) => {
    let lastPlayer = game.players.shift();
    lastPlayer.tiles.push(tile);
    lastPlayer.tokens.push(token);
    game.players.push(lastPlayer);
  }

  const handleDisplayChanges = (game, idx) => {
    let newToken, newTile
    if (game.tokenPool.length) {
      newToken = game.tokenPool.pop();
    }
    if (game.tilePool.length) {
      newTile = game.tilePool.pop();
    }
    if (newToken && newTile) {
      const newPair = {
        token: newToken,
        tile: newTile,
      }
      game.display[idx] = newPair;
    } else {
      game.display.splice(idx, 1);
    }
  }

  return (
    <Container id="display">
      {selectedGame.data ?
        selectedGame.data._id ?
          selectedGame.data.display.map((set, idx) => (
            <TileTokenPair
              key={idx}
              set={set}
              handlePick={handlePick}
            />
          ))
          :
          <Typography>No More Tiles / Tokens</Typography>
        :
        <Typography>No Game Selected</Typography>}
    </Container>
  )
}

export default TileDisplay