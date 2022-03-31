import * as api from '../api';


// action creators

export const getGames = () => async (dispatch) => {
  
  try{

    const { data } = await api.fetchGames();
    console.log(data);
    dispatch({type: 'FETCH_ALL', payload: data});

  }catch(e){

    console.log(e.message);

  }
}

export const createGame = (game) => async (dispatch) => {
  try {

    const { data } = await api.createGame(game);
    dispatch({ type: 'CREATE', payload: data });

  } catch (error) {
    
    console.log(error.message);

  }
}

export const selectGame = (game) => async (dispatch) => {
  try{
    dispatch({type: 'SELECT_GAME', payload: game})
  }catch(error){
    console.log(error.message);
  }
}

export const pickAndUpdate = (payload) => async (dispatch) => {
  try{
    let gameToUpdate = payload.game;
    const index = payload.idx;
    console.log(index)

    const selectedToken = gameToUpdate.display[index].token;
    const selectedTile = gameToUpdate.display[index].tile;
    gameToUpdate.tileDiscard.push(selectedTile);
    gameToUpdate.tokenDiscard.push(selectedToken);

    const newToken = gameToUpdate.tokenPool.pop();
    const newTile = gameToUpdate.tilePool.pop();
    const newPair = {
      token: newToken,
      tile: newTile,
    }

    let lastPlayer = gameToUpdate.players.shift();
    gameToUpdate.players.push(lastPlayer)
    
    gameToUpdate.display.shift()
    gameToUpdate.display.push(newPair);

    console.log(gameToUpdate)

    await dispatch({type: 'PICK_PAIR', payload: gameToUpdate})
  }catch(error){
    console.log(error.message);
  }
}