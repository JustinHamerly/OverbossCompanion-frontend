const reducer = (selectedGame = {}, action) => {
  switch (action.type) {
    case 'activeGame/selectActive':
      if (action.payload){
        return action.payload;
      }  else {
        return selectedGame;
      }

    case 'activeGame/pickAndUpdate':
      if(action.payload){
        return action.payload;
      }else{
        break;
      }

    case 'activeGame/saveAndUpdate':
      if(action.payload){
        return action.payload;
      }else{
        break;
      }
  
    default:
      return selectedGame;
  }
}

export default reducer;