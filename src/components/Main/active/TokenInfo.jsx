import React from 'react'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

import PersonIcon from '@mui/icons-material/Person';


import useStyles from './styles/tokenInfoStyles'

const TokenInfo = () => {
  const classes = useStyles()
  const selectedGame = useSelector((state) => state.activeGame);

  return (
    <div className={classes.container}>
      <Typography className={classes.header}>
        PLAYER TURN
      </Typography>
      <PersonIcon />
      <Typography className={classes.text}>
        {selectedGame.data.players[0].name}
      </Typography>
    </div>
  )
}

export default TokenInfo