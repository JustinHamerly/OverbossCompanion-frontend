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
  extraReducers: builder => {
    builder.addCase(
      fetchAll.pending,
      (state) => { state.status = 'loading games' }
    )
    builder.addCase(
      fetchAll.fulfilled,
      (state, action) => {
        state.status = 'games loaded';
        state.games = action.payload;
      }
    )
    builder.addCase(
      fetchAll.rejected,
      (state) => { state.status = 'rejected fetch' }
    )

    builder.addCase(
      createNew.pending, (state) => { state.status = 'creating game' }
    )
    builder.addCase(
      createNew.fulfilled,
      (state, action) => {
        state.status = 'game created';
        state.games = [...state.games, action.payload];
      }
    )
    builder.addCase(
      createNew.rejected,
      (state) => { state.status = 'failed to create game' }
    )
    builder.addCase(
      removeGame.pending,
      (state) => { state.status = 'removing game' }
    )
    builder.addCase(
      removeGame.fulfilled,
      (state, action) => {
        state.status = 'game removed'
        state.games = state.games.filter(game => game._id !== action.payload)
      }
    )
    builder.addCase(
      removeGame.rejected,
      (state) => { state.status = 'failed to delete game' }
    )

  }
}

const gamesSlice = createSlice(gamesOptions);

export default gamesSlice.reducer;