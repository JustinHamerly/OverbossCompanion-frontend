import { combineReducers } from "redux";

import games from './games';
import selectedGame from './selectedGame';

export default combineReducers({
  games, 
  selectedGame
});
