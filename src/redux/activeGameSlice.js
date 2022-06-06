import * as api from './api';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const saveActiveGame = createAsyncThunk('activeGame/saveActive', async (game, thunkAPI) => {
  const { data } = await api.saveGame(game._id, game);
  return data
})

const activeGameOptions = {
  name: 'activeGame',
  initialState: {
    activeGame: {},
    status: '',
  },
  reducers: {
    selectGame: (state, action) => state = action.payload,
    pickAndUpdate: (state, action) => state = action.payload
  },
  extraReducers: {
    [saveActiveGame.pending]: (state, action) => {
      state.status = 'saving game';
    },
    [saveActiveGame.fulfilled]: (state, action) => {
      state.status = 'game saved';
      state.games = action.payload;
    },
    [saveActiveGame.rejected]: (state, action) => {
      state.status = 'game not saved';
    },
  }
}

const activeGameSlice = createSlice(activeGameOptions);

export const { pickAndUpdate, selectGame } = activeGameSlice.actions;
export default activeGameSlice.reducer;