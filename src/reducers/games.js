const reducer = (games = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      if (action.payload){
        return action.payload;
      }  else {
        return games;
      }
    case 'CREATE':
      return games;
    default:
      return games;
  }
}

export default reducer;
