const reducer = (selectedGame = {}, action) => {
  switch (action.type) {
    case 'SELECT_GAME':
      if (action.payload){
        return selectedGame = action.payload;
      }  else {
        return selectedGame;
      }


    case 'PICK_PAIR':
      if(action.payload){
        return selectedGame = action.payload;
      }else{
        break;
      }
  
    default:
      return selectedGame;
  }
}

export default reducer;