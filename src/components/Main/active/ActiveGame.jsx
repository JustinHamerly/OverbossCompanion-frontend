import SelectedGameInfo from './SelectedGameInfo';
import TileDisplay from './TileDisplay';

function ActiveGame() {
  return (
    <div className="toolbar">
      <SelectedGameInfo />
      <TileDisplay />
    </div>
  )
}

export default ActiveGame;