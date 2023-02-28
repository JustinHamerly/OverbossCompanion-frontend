import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  cardPair: {
    width: '206px',
    height: '256px',
    margin: '5px'
  },
  cardContent: {
    padding: 0,
    border: '3px #2B1D46 solid'
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