import React from 'react';
import { Button } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

import useStyles from './styles/gamesDrawerStyles';

const DrawerCloseButton = ({handleDrawerClose}) => {
  const classes = useStyles();
  return (
    <Button onClick={handleDrawerClose} className={classes.closeButton} >
      <CloseIcon />
    </Button>
  )
}

export default DrawerCloseButton