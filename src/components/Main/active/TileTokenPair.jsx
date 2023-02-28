import React from 'react'
import { useSelector } from 'react-redux';
import { Typography, Button, Card, CardContent, CardActions } from '@material-ui/core'

import useStyles from './styles/TileTokenPairStyles'

const TileTokenPair = (props) => {
  let selectedGame = useSelector((state) => state.activeGame);
  const classes = useStyles();

  return (
    <Card className={classes.cardPair}>
      <CardContent className={classes.cardContent}>
        <img 
          src={props.set.tile.tileImg} 
          alt={props.set.tile.tileName} 
          className={classes.tileImage}
        ></img>
        <img 
          src={props.set.token.tokenImg} 
          alt={props.set.tile.tileName}
          className={classes.tokenImage}
        ></img>
        <div className={classes.pairTextBox}>
          <Typography>Tile: {props.set.tile.tileName}</Typography>
          { 
            props.set.tile.variant && 
            <Typography>Tile Variant: {props.set.tile.variant}</Typography> 
          }
          <Typography>Token: {props.set.token.tokenName}</Typography>
        </div>
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