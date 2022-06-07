import SelectedGameInfo from './SelectedGameInfo/SelectedGameInfo';
import useStyles from './styles';
import TileDisplay from './TileDisplay/TileDisplay';

function GameToolbar() {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <SelectedGameInfo />
      <TileDisplay />
    </div>
  )
}

export default GameToolbar;