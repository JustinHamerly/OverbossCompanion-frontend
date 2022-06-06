import axios from 'axios';

const url = process.env.REACT_APP_SERVER || 'http://localhost:5000';

export const fetchGames = () => axios.get(`${url}/games`);
export const createGame = (newGame) => axios.post(`${url}/games`, newGame);
export const saveAndUpdateGame = (id, updatedGame) => axios.put(`${url}/games/${id}`, updatedGame);
export const deleteGame = (id) => axios.delete(`${url}/games/${id}`);
