import React from 'react'
import { NavLink } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import useStyles from './menuStyles.js';

const MenuListItem = ({ name, route, icon, closeMenu}) => {
  const classes = useStyles();
  return (
    <MenuItem
      onClick={closeMenu}
      className={classes.menuButton}
    >
      <NavLink to={route}>{icon}{name}</NavLink>
    </MenuItem>
  )
}

export default MenuListItem