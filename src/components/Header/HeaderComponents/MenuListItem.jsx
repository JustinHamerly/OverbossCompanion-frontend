import React from 'react'
import { NavLink } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

import useStyles from './styles/listItemStyles.js';

const MenuListItem = ({ name, route, icon, closeMenu}) => {
  const classes = useStyles();
  return (
    <MenuItem
      onClick={closeMenu}
      className={classes.item}
    >
      <NavLink to={route} className={classes.link}>
        {icon}{name}
      </NavLink>
    </MenuItem>
  )
}

export default MenuListItem