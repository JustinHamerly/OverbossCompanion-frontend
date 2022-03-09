const reducer = (games = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      if (action.payload){
        return [...games, action.payload];
      }  else {
        return games;
      }
    case 'CREATE':
      return [...games, action.payload];
    default:
      return games;
  }
}

export default reducer;
