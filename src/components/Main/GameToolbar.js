import SelectedGameInfo from './SelectedGameInfo';
import TileDisplay from './TileDisplay';

function GameToolbar() {
  return (
    <div className="toolbar">
      <SelectedGameInfo />
      <TileDisplay />
    </div>
  )
}

export default GameToolbar;