import React, { useState } from 'react'
import { Button, Menu } from '@mui/material';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import useStyles from './menuStyles.js';
import MenuListItem from './MenuListItem.js';

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
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={openMenu}
      >
        <ListRoundedIcon alt='site menu' />
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
    </>
  )
}

export default NavMenu