import SelectedGameInfo from './SelectedGameInfo';
// import useStyles from '../GameToolbar/styles';
import TileDisplay from './TileDisplay';

function GameToolbar() {
  // const classes = useStyles();
  // className={classes.toolbar}

  return (
    <div className="toolbar">
      <SelectedGameInfo />
      <TileDisplay />
    </div>
  )
}

export default GameToolbar;