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
    await dispatch({type: 'PICK_PAIR', payload: payload});
    await api.updateGame(payload._id, payload)
  }catch(error){
    console.log(error.message);
  }
}