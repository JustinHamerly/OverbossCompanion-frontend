import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Paper, Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText } from '@material-ui/core';

import { createNew } from '../../../redux/gamesSlice';

import NewGame from '../../../data/gameConstructor.js';

function NewGameForm(props) {
  const dispatch = useDispatch();

  const terrainTypes = require('../../../data/terrainTypes');
  const terrainKeys = Array.from(terrainTypes.default.keys());
  
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [checkedCount, updateCheckedCount] = useState(0);
  const [selectedTerrain, setSelectedTerrain] = useState([]);
  const [playerCount, setPlayerCount] = useState(2);
  const [players, setPlayers] = useState([]);
  const [open, setOpen] = useState(false);
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    if (checkedCount === 5) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [checkedCount]);

  useEffect(() => {
    if (players.length === playerCount) {
      let game = new NewGame('test@email.com', selectedTerrain, playerCount, players);
      setGameData(game);
    }
  }, [players, playerCount, selectedTerrain]);

  const pickRandomNumber = (array) => {
    return Math.floor(Math.random() * (array.length));
  }

  const handleRandom = (e) => {
    let checkBoxes = document.forms.terrainSelect.terrainTypes;
    for (let i = 0; i < terrainKeys.length; i++) {
      checkBoxes[i].checked = false;
      updateCheckedCount(0);
    }

    let selectedTypes = [];

    for (let i = 0; i < 5; i++) {
      let randomKey = checkBoxes[pickRandomNumber(terrainKeys)];
      while (randomKey.checked) {
        randomKey = checkBoxes[pickRandomNumber(terrainKeys)];
      }
      while (!randomKey.checked) {
        randomKey.checked = true;
        selectedTypes.push(randomKey.value);
      }
    }

    setSelectedTerrain(selectedTypes);
    updateCheckedCount(5);
  }

  const handleCheckbox = (e) => {
    if (e.target.checked === true) {
      updateCheckedCount(checkedCount + 1);
      setSelectedTerrain(selectedTerrain => [...selectedTerrain, e.target.value]);
    } else {
      updateCheckedCount(checkedCount - 1);
      setSelectedTerrain(selectedTerrain => selectedTerrain.filter(item => item !== e.target.value));
    }
  }

  const handlePlayerCount = (e) => {
    setPlayerCount(parseInt(e.target.value));
  }

  const handleNewGame = async () => {
    let playerInputs = document.forms.terrainSelect.pname;
    let playerArray = [];
    for (let i = 0; i < playerCount; i++) {
      playerArray.push({ id: playerInputs[i].id, name: playerInputs[i].value, tokens: [], tiles: [], consumable: [], consumed: [] });
    }
    setPlayers(playerArray);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleConfirm = () => {
    dispatch(createNew(gameData));
    setOpen(false);
    props.setModalOpen(false);
  }

  return (
    <Paper>
      <form id="terrainSelect" autoComplete="off" noValidate className="form">
        <Paper className="formTerrain">
          {
            terrainKeys.map(key => {
              return (
                <Paper key={key} className="formTerrainInput">
                  <label htmlFor={key}>{key}</label>
                  <input type="checkbox" id={key} name="terrainTypes" value={key} onClick={(e) => handleCheckbox(e)} />
                </Paper>
              )
            })
          }
        </Paper>
        <Paper key="players" className="rightForm">
          <Button id='randomFive' className="buttonSubmit" onClick={() => handleRandom()}>RANDOM 5 TERRAIN</Button>
          <label htmlFor="playerCount" className="inputLabel">Player Count:</label>
          <select defaultValue="2" className="fileInput" onChange={(e) => handlePlayerCount(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="playerone" className="inputLabel">Player 1:</label>
          <input type="text" id="playerone" name="pname" className="fileInput"></input>
          {playerCount > 1 &&
            <>
              <label htmlFor="playertwo" className="inputLabel">Player 2:</label>
              <input type="text" id="playertwo" name="pname" className="fileInput"></input>
            </>}
          {playerCount > 2 &&
            <>
              <label htmlFor="playerthree" className="inputLabel">Player 3:</label>
              <input type="text" id="playerthree" name="pname" className="fileInput"></input>
            </>}
          {playerCount > 3 &&
            <>
              <label htmlFor="playerfour" className="inputLabel">Player 4:</label>
              <input type="text" id="playerfour" name="pname" className="fileInput"></input>
            </>}
          {playerCount === 5 &&
            <>
              <label htmlFor="playerfive" className="inputLabel">Player 5:</label>
              <input type="text" id="playerfive" name="pname" className="fileInput"></input>
            </>}
          <Button id="createGameButton" disabled={buttonDisabled} title="Create Game Button" className="buttonSubmit" onClick={handleNewGame}>CREATE GAME</Button>
        </Paper>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Create a new Game?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to create a game?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>Confirm</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  )

}

export default NewGameForm;