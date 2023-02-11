import React from 'react'
import { Divider, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

import PersonIcon from '@mui/icons-material/Person';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';

import useStyles from './styles/tokenInfoStyles'

const TokenInfo = () => {
  const classes = useStyles()
  const selectedGame = useSelector((state) => state.activeGame);

  return (
    <div className={classes.container}>
      <Typography className={classes.header}>
        CURRENT TURN
      </Typography>
      <PersonIcon />
      <Typography className={classes.text}>
        {selectedGame.data.players[0].name}
      </Typography>

      <Divider className={classes.divider} />
      <div className={classes.tokenInfo}>
        <CollectionsRoundedIcon />
        <Typography className={classes.text}>
          {selectedGame.data.tilePool.length}
        </Typography>
        <SwitchAccountRoundedIcon />
        <Typography className={classes.text}>
          {selectedGame.data.tokenPool.length}
        </Typography>
      </div>
    </div>
  )
}

export default TokenInfo