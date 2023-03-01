import React from 'react'
import { useSelector } from 'react-redux';
import { Typography, Button, Card, CardContent, CardActions } from '@material-ui/core'

import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';

import useStyles from './styles/TileTokenPairStyles'

const TileTokenPair = (props) => {
  let selectedGame = useSelector((state) => state.activeGame);
  const classes = useStyles();
  console.log(props)
  return (
    <Card className={classes.cardPair}>
      <CardContent className={classes.cardContent}>
        <div 
          alt={props.set.tile.tileName} 
          className={classes.tileBox}
          style={{background: props.set.tile.color}}
        >
          <div
            style={{backgroundColor: props.set.token.color}}
            alt={props.set.token.tokenName}
            className={classes.tokenBox}
          >
          </div>
        </div>
        <div className={classes.pairTextBox}>
          
          <Typography className={classes.selectionText}>
            <CollectionsRoundedIcon alt='tile icon' style={{color: '#FFDA33'}}/>
            {props.set.tile.tileName} {props.set.tile.variant ? `- ${props.set.tile.variant}` : ''} 
          </Typography>
          <Typography className={classes.selectionText}>
            <SwitchAccountRoundedIcon alt='token icon' style={{color: '#FFDA33'}} />
            {props.set.token.tokenName}
          </Typography>
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