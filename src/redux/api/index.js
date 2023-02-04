import axios from 'axios';

const url = process.env.REACT_APP_SERVER;

export const fetchGames = () => axios.get(`${url}/games`);
export const createGame = (newGame) => axios.post(`${url}/games`, newGame);
export const saveGame = (id, updatedGame) => axios.put(`${url}/games/${id}`, updatedGame);
export const deleteGame = (id) => axios.delete(`${url}/games/${id}`);
