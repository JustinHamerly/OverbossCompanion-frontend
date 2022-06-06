import * as api from '../api';


export const getGames = () => async (dispatch) => {
  try{
    const { data } = await api.fetchGames();
    await dispatch({type: 'games/fetchAll', payload: data});
  }catch(e){
    console.log(e.message);
  }
}

export const createGame = (game) => async (dispatch) => {
  try {
    const { data } = await api.createGame(game);
    await dispatch({ type: 'games/createNew', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const selectGame = (game) => async (dispatch) => {
  try{
    await dispatch({type: 'activeGame/selectActive', payload: game})
  }catch(error){
    console.log(error.message);
  }
}

export const pickAndUpdate = (updatedGame) => async (dispatch) => {
  try{
    await dispatch({type: 'activeGame/pickAndUpdate', payload: updatedGame});
  }catch(error){
    console.log(error.message);
  }
}

export const saveAndUpdate = (updatedGame) => async (dispatch) => {
  try {
    const { data } = await api.saveAndUpdateGame(updatedGame._id, updatedGame)
    dispatch({ type: 'activeGame/saveAndUpdate', payload: data})
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteGame = (gameId) => async (dispatch) => {
  try {
    await api.deleteGame(gameId);
    await dispatch({type: 'activeGame/delete', payload: gameId})
  } catch (error) {
    console.log(error.message)
  }
}