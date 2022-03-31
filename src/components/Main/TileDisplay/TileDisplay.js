import { Container, Paper, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';


function TileDisplay(){
  const selectedGame = useSelector((state) => state.selectedGame);

  return(
    <Container id="display">
      {selectedGame.display ?
        selectedGame.display.map(set => {
          return(
            <Paper key={selectedGame.display.indexOf(set)}>
              <Typography>Tile: {set.tile.tileName}</Typography>
              <Typography>Token: {set.token.tokenName}</Typography>
            </Paper>
          )
        })
      :
      <Typography>No Selected Game</Typography>}
    </Container>
  )
}

export default TileDisplay