import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  cardPair: {
    width: '175px',
    height: '300px',
    margin: '5px',
    border: '5px #2B1D46 groove'
  },
  cardContent: {
    padding: 0,
    
  },
  tileImage: {
    outline: '#2B1D46 3px solid'
  },
  tokenImage: {
    position: 'relative',
    top: '-60px',
    left: '10px',
    borderRadius: '3px',
    outline: '#2B1D46 3px solid'
  },
  pairTextBox: {
    position: 'relative',
    top: '-60px',
    float: 'right',
    marginRight: '5px'
  }
}))