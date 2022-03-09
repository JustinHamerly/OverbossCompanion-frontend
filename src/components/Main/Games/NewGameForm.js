import React, { Fragment, useState, useEffect } from 'react';
import { Button, Paper, Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText, Modal } from '@material-ui/core';
import NewGame from '../../../data/gameConstructor.js';
import { useDispatch } from 'react-redux';
import { createGame } from '../../../actions/games';
import useStyles from './styles.js';

const terrainTypes = require('../../../data/terrainTypes.js');
const terrainKeys = Array.from(terrainTypes.default.keys());

function Form(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [checkedCount, updateCheckedCount] = useState(0);
  const [selectedTerrain, setSelectedTerrain] = useState([]);
  const [playerCount, setPlayerCount] = useState(2);
  const [players, setPlayers] = useState([]);
  const [open, setOpen] = useState(false);

  const [gameData, setGameData] = useState({});

  useEffect(() => {
    if(checkedCount === 5){
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  }, [checkedCount]);

  useEffect(() => {
    if (players.length === playerCount){
      let game = new NewGame('test@email.com', selectedTerrain, playerCount, players);
      setGameData(game);
    }
  }, [players, playerCount, selectedTerrain]);

  const pickRandomNumber = (array) => {
    return Math.floor(Math.random() * (array.length));
  }

  const handleRandom = (e) => {
    let checkBoxes = document.forms.terrainSelect.terrainTypes;
    for (let i=0; i<terrainKeys.length; i++){
      checkBoxes[i].checked = false;
      updateCheckedCount(0);
    }

    let selectedTypes = [];

    for(let i=0; i<5; i++){
      let randomKey = checkBoxes[pickRandomNumber(terrainKeys)];
      while(randomKey.checked){
        randomKey = checkBoxes[pickRandomNumber(terrainKeys)];
      }
      while(!randomKey.checked){
        randomKey.checked = true;
        selectedTypes.push(randomKey.value);
      }
    }

    setSelectedTerrain(selectedTypes);
    updateCheckedCount(5);
  }

  const handleCheckbox = (e) => {
    if(e.target.checked === true){
      updateCheckedCount(checkedCount+1);
      setSelectedTerrain(selectedTerrain => [...selectedTerrain, e.target.value]);
    }else{
      updateCheckedCount(checkedCount-1);
      setSelectedTerrain(selectedTerrain => selectedTerrain.filter(item => item !== e.target.value));
    }
  }
  
  const handlePlayerCount = (e) => {
    setPlayerCount(parseInt(e.target.value));
  }

  const handleNewGame = async () => {
    let playerInputs = document.forms.terrainSelect.pname;
    let playerArray = [];
    for (let i=0; i<playerCount; i++){
      playerArray.push({id: playerInputs[i].id, name: playerInputs[i].value, tokens: [], tiles: [], consumable: [], consumed: []});
    }
    setPlayers(playerArray);
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  }
  
  const handleConfirm = () => {
    dispatch(createGame(gameData));
    setOpen(false);
  }
  
  return(
    <Modal open={props.modalOpen} onClose={props.handleModalClose} className={classes.modal}>
      <Paper className={classes.paper} >
        <form id="terrainSelect" autoComplete="off" noValidate className={classes.form}>
          <Paper className={classes.formTerrain}>
            {
              terrainKeys.map(key => {
                return(
                  <Paper key={key} className={classes.formTerrainInput}>
                    <label htmlFor={key}>{key}</label>
                    <input type="checkbox" id={key} name="terrainTypes" value={key} onClick={(e) => handleCheckbox(e)}/>
                  </Paper>
                )
              })
            }
          </Paper>
          <Paper key="players" className={classes.rightForm}>
            <Button id='randomFive' className={classes.buttonSubmit} onClick={() => handleRandom()}>RANDOM 5 TERRAIN</Button>
            <label htmlFor="playerCount" className={classes.inputLabel}>Player Count:</label>
            <select defaultValue="2" className={classes.fileInput} onChange={(e) => handlePlayerCount(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label htmlFor="playerone" className={classes.inputLabel}>Player 1:</label>
            <input type="text" id="playerone" name="pname" className={classes.fileInput}></input>
            {playerCount > 1 &&
              <>
                <label htmlFor="playertwo" className={classes.inputLabel}>Player 2:</label>
                <input type="text" id="playertwo" name="pname" className={classes.fileInput}></input>
              </>}
            {playerCount > 2 && 
              <>
                <label htmlFor="playerthree" className={classes.inputLabel}>Player 3:</label>
                <input type="text" id="playerthree" name="pname" className={classes.fileInput}></input>
              </>}
            {playerCount > 3 && 
              <>
                <label htmlFor="playerfour" className={classes.inputLabel}>Player 4:</label>
                <input type="text" id="playerfour" name="pname" className={classes.fileInput}></input>
              </>}
            {playerCount === 5 &&
              <>
                <label htmlFor="playerfive" className={classes.inputLabel}>Player 5:</label>
                <input type="text" id="playerfive" name="pname" className={classes.fileInput}></input>
              </>}
            <Button id="createGameButton" disabled={buttonDisabled} title="Create Game Button" className={classes.buttonSubmit} onClick={handleNewGame}>CREATE GAME</Button>
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
    </Modal>
  )
  
}

export default Form;