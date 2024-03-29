import * as api from './api';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const saveActiveGame = createAsyncThunk('activeGame/saveActive', async (game, thunkAPI) => {
  const { data } = await api.saveGame(game._id, game);
  return data;
})

const activeGameOptions = {
  name: 'activeGame',
  initialState: {
    data: {},
    history: [],
    status: '',
  },
  reducers: {
    selectGame: (state, action) => state = {
      ...state,
      data: action.payload,
      status: 'game selected'
    },
    pickAndUpdate: (state, action) => state = {
      history: [...state.history, state.data],
      data: action.payload,
      status: 'updated active game'
    },
    undoPick: (state, action) => state = {
      data: state.history[state.history.length - 1],
      history: state.history.slice(0, -1),
      status: 'last pick undone'
    },
    clearActive: (state, action) => state = {
      data: {},
      history: [],
      status: ''
    }
  },
  extraReducers: builder => {
    builder.addCase(
      saveActiveGame.pending,
      (state) => { state.status = 'saving game'; }
    )
    builder.addCase(
      saveActiveGame.fulfilled,
      (state, action) => {
        state.status = 'game saved';
        state.data = action.payload;
      }
    )
    builder.addCase(
      saveActiveGame.rejected,
      (state) => {
        state.status = 'game not saved';
      }
    )
  }
}

const activeGameSlice = createSlice(activeGameOptions);

export const {
  pickAndUpdate,
  selectGame,
  undoPick,
  clearActive
} = activeGameSlice.actions;

export default activeGameSlice.reducer;