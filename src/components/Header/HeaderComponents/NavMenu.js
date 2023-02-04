import React, { useState } from 'react'
import { Menu } from '@mui/material';
import { Button } from '@material-ui/core';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import MenuListItem from './MenuListItem.js';

import useStyles from './styles/menuStyles';

const NavMenu = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    setAnchorEl(e.target);
    setOpen(true)
  }

  const closeMenu = () => {
    setAnchorEl(null);
    setOpen(false)
  }

  return (
    <div >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={openMenu}
        className={classes.button}
      >
        <p className={classes.mText} >MENU</p>
        <ViewListRoundedIcon className={classes.menuIcon} fontSize={'large'} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        MenuListProps={{
          'aria-labelledby': 'site menu button',
        }}
        className={classes.menu}
      >
        <MenuListItem
          name='HOME'
          route='/'
          icon={<HomeRoundedIcon />}
          closeMenu={closeMenu}
        />
        <MenuListItem
          name='LOGIN'
          route='/login'
          icon={<ExitToAppRoundedIcon />}
          closeMenu={closeMenu}
        />
        <MenuListItem
          name='PROFILE'
          route='/profile'
          icon={<PersonRoundedIcon />}
          closeMenu={closeMenu}
        />
        <MenuListItem
          name='NEW GAME'
          route='/new'
          icon={<AddBoxRoundedIcon />}
          closeMenu={closeMenu}
        />
        <MenuListItem
          name='ACTIVE GAME'
          route='/active'
          icon={<GridViewRoundedIcon />}
          closeMenu={closeMenu}
        />
        <MenuListItem
          name='ABOUT'
          route='/about'
          icon={<InfoRoundedIcon />}
          closeMenu={closeMenu}
        />
      </Menu>
    </div>
  )
}

export default NavMenu