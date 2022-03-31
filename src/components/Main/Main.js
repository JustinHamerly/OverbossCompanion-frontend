import React, { Fragment } from 'react';
import GameToolbar from './GameToolbar/GameToolbar.js';
import TileDisplay from './TileDisplay/TileDisplay.js';

function Main() {
  return (
    <Fragment>
      <GameToolbar />
      <TileDisplay />
    </Fragment>
  )  
}

export default Main;