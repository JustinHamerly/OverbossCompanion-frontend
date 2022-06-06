import React from 'react'
import { useSelector } from 'react-redux';

import { Typography, Button, Card, CardContent, CardActions } from '@material-ui/core'

const TileTokenPair = (props) => {

  let selectedGame = useSelector((state) => state.activeGame)

  return (
    <Card>
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
        <Button onClick={() => { props.handlePick(selectedGame.display.indexOf(props.set)) }}>Pick Pair</Button>
      </CardActions>
    </Card>
  )
}

export default TileTokenPair