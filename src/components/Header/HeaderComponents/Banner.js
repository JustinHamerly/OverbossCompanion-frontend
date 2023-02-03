import React from 'react'
import { Typography } from '@material-ui/core';
import FortRoundedIcon from '@mui/icons-material/FortRounded';

import useStyles from './styles/bannerStyles';

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <FortRoundedIcon className={classes.castleIcon} />
      <Typography variant="h1" align="center" className={classes.h1}>
        Overboss Companion
      </Typography>
    </div>
  )
}

export default Banner