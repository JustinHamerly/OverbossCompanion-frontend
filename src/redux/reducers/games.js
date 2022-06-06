const reducer = (games = [], action) => {
  switch (action.type) {

    case 'games/fetchAll':
      if (action.payload) {
        return [...games, action.payload];
      } else {
        return games;
      }

    case 'games/createNew':
      return [...games, action.payload];

    case 'games/delete':
      const filteredGames = games.filter(game => game._id !== action.payload);
      return filteredGames;

    default:
      return games;

  }
}

export default reducer;
