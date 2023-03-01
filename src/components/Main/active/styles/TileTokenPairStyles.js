import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  cardPair: {
    width: '175px',
    height: '300px',
    margin: '5px',
    border: '5px #2B1D46 groove',
    backgroundColor: '#2B1D46'
  },
  cardContent: {
    padding: 0,
  },
  tileBox: {
    outline: '#2B1D46 3px solid',
    width: '175px',
    height: '175px'
  },
  tokenBox: {
    width: '65px',
    height: '65px',
    borderRadius: '3px',
    margin: '55px',
    display: 'inline-block',
    outline: '#2B1D46 3px solid',
  },
  pairTextBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left'
  },

  selectionText: {
    color: '#D9EFD9',
    margin: '3px 0',
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    verticalAlign: 'center'
  }
}))