import { Typography, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';

import { saveActiveGame, undoPick } from '../../../redux/activeGameSlice'

import useStyles from './styles/selectedGameInfoStyles'

function SelectedGameInfo(props) {
  const classes = useStyles()
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.activeGame);
  const [undoDisabled, setUndoDisabled] = useState(true);

  useEffect(() => {
    if (selectedGame.history.length) {
      setUndoDisabled(false);
    } else {
      setUndoDisabled(true)
    }
  }, [selectedGame])


  return (
    <>
      {selectedGame.data._id ?
        <div className={classes.container}>
          <Typography className={classes.header}>
            Selected Game
          </Typography>
          <GroupsRoundedIcon fontSize={'medium'} />
          {selectedGame.data.players.map(player => (
            <Typography className={classes.text}>
              {player.name}
            </Typography>
          ))}

          <TerrainRoundedIcon fontSize={'medium'} />
          {selectedGame.data.terrain.map(t => (
            <Typography className={classes.text}>
              {t}
            </Typography>
          ))}
          <Typography className={classes.text}>
            Tile Pool: {selectedGame.data.tilePool.length} tiles left
          </Typography>
          <Typography className={classes.text}>
            Token Pool: {selectedGame.data.tokenPool.length} tiles left
          </Typography>
          <Typography className={classes.text}>
            Player Turn: {selectedGame.data.players[0].name}
          </Typography>
          <Button
            onClick={() => dispatch(saveActiveGame(selectedGame.data))}
          >
            Save Game
          </Button>
          <Button
            disabled={undoDisabled}
            onClick={() => dispatch(undoPick(selectedGame.data))}
          >
            Undo
          </Button>
        </div>
        :
        null
      }
    </>
  )
}

export default SelectedGameInfo