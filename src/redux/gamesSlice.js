import * as api from './api';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAll = createAsyncThunk('games/fetchAll', async () => {
  const allGames = await api.fetchGames();
  return allGames.data;
})

export const createNew = createAsyncThunk('games/createNew', async (game, thunkAPI) => {
  const {data} = await api.createGame(game)
  return data
})

export const removeGame = createAsyncThunk('games/deleteGame', async (id, thunkAPI) => {
  await api.deleteGame(id)
  return id;
})

const gamesOptions = {
  name: 'games',
  initialState: {
    games: [],
    status: '',
  },
  extraReducers: {
    [fetchAll.pending]: (state, action) => {
      state.status = 'loading games';
    },
    [fetchAll.fulfilled]: (state, action) => {
      state.status = 'games loaded';
      state.games = action.payload;
    },
    [fetchAll.rejected]: (state, action) => {
      state.status = 'rejected fetch';
    },
    [createNew.pending]: (state, action) => {
      state.status = 'creating game';
    },
    [createNew.fulfilled]: (state, action) => {
      state.status = 'game created';
      state.games.push(action.payload);
    },
    [createNew.rejected]: (state, action) => {
      state.status = 'failed to create game';
    },
    [removeGame.pending]: (state, action) => {
      state.status = 'removing game';
    },
    [removeGame.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.status = 'game removed';
      state.games = state.games.filter(game => game._id !== action.payload);
    },
    [removeGame.rejected]: (state, action) => {
      state.status = 'failed to delete game';
    },

  }
}

const gamesSlice = createSlice(gamesOptions);

export default gamesSlice.reducer;