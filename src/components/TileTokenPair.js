import React from 'react'
import { useSelector } from 'react-redux';

import { Typography, Button, Card, CardContent, CardActions } from '@material-ui/core'

// import useStyles from './styles';

const TileTokenPair = (props) => {
  // const classes = useStyles();
  let selectedGame = useSelector((state) => state.activeGame)

  return (
    <Card className="pair">
      <CardContent>
        <img src={props.set.tile.tileImg} alt={props.set.tile.tileName}></img>
        <img src={props.set.token.tokenImg} alt={props.set.tile.tileName}></img>
        <Typography>Tile: {props.set.tile.tileName}</Typography>
        { 
          props.set.tile.variant && 
          <Typography>Tile Variant: {props.set.tile.variant}</Typography> 
        }
        <Typography>Token: {props.set.token.tokenName}</Typography>
      </CardContent>
      <CardActions>
        <Button 
          className="button" 
          onClick={() => { props.handlePick(selectedGame.data.display.indexOf(props.set)) }}
        >
          Pick Pair
        </Button>
        <Button 
          className="button"
          onClick={() => {}}
        >
          Info
        </Button>
      </CardActions>
    </Card>
  )
}

export default TileTokenPair