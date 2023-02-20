import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Typography, Divider, Button } from '@material-ui/core'

import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


import useStyles from './styles/gameInfoStyles'

const GameInfo = () => {
  const classes = useStyles();
  const selectedGame = useSelector((state) => state.activeGame);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={classes.gameInfoContainer}>
      <Button className={classes.header} onClick={() => setShowDetails(prev => !prev)}>
          GAME INFO {showDetails ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
      </Button>
      {showDetails ?
        <>
          <GroupsRoundedIcon fontSize={'medium'} />
          {selectedGame.data.players.map(player => (
            <Typography key={player.name} className={classes.text}>
              {player.name}
            </Typography>
          ))}
          <TerrainRoundedIcon fontSize={'medium'} />
          {selectedGame.data.terrain.map(t => (
            <Typography key={t} className={classes.text}>
              {t}
            </Typography>
          ))}
          <Divider className={classes.divider} />
          <div className={classes.tokenInfo}>
            <CollectionsRoundedIcon />
            <Typography className={classes.text}>
              {selectedGame.data.draw.tile.length}
            </Typography>
            <SwitchAccountRoundedIcon />
            <Typography className={classes.text}>
              {selectedGame.data.draw.token.length}
            </Typography>
          </div>
        </>
        :
        null
      }
    </div>
  )
}

export default GameInfo