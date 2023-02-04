import React from 'react'
import { Button, Typography } from '@material-ui/core'
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';

import useStyles from './styles/gamesDrawerButtonStyles';

const GamesDrawerButton = ({setGamesDrawerOpen}) => {
  const classes = useStyles();

  return (
    <Button onClick={() => setGamesDrawerOpen(true)} className={classes.button} >
      <DoubleArrowRoundedIcon className={classes.myGamesIcon} fontSize={'large'} />
      <Typography className={classes.myGamesText}>GAMES</Typography>
    </Button>
  )
}

export default GamesDrawerButton