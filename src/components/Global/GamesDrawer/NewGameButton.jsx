import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import useStyles from './styles/gamesDrawerStyles';

const NewGameButton = ({handleDrawerClose}) => {
  const classes = useStyles()
  return (
    <Button>
      <Link to='/new' onClick={handleDrawerClose} className={classes.newGameButton}>
        <AddCircleRoundedIcon fontSize='large' />
        <h3 className={classes.newGameButtonText}>NEW</h3>
      </Link>
    </Button>
  )
}

export default NewGameButton