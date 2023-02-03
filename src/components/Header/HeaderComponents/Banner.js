import React from 'react'
import { Typography } from '@material-ui/core';
import FortRoundedIcon from '@mui/icons-material/FortRounded';

import useStyles from './styles/bannerStyles';

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Typography variant="h1" align="center" className={classes.title}>
        OVERBOSS
      </Typography>
      <FortRoundedIcon className={classes.icon} fontSize={'large'} />
      <Typography variant="h1" align="center" className={classes.title}>
        COMPANION
      </Typography>
    </div>
  )
}

export default Banner