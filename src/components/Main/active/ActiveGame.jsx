import SelectedGameInfo from './SelectedGameInfo';
import TileDisplay from './TileDisplay';
import useStyles from './styles/activeGameStyles'

function ActiveGame() {
  const classes = useStyles();
  return (
    <div className={classes.activeDisplay}>
      <SelectedGameInfo />
      <TileDisplay />
    </div>
  )
}

export default ActiveGame;