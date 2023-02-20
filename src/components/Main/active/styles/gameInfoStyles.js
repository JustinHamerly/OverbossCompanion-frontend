import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  gameInfoContainer: {
    backgroundColor: '#2B1D46',
    padding: '10px',
    width: '100%',
    margin: '5px 0',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Titan One',
    color: 'rgb(224,241,109)',
    WebkitTextStroke: '2px #282E04',
    '&:hover':{
      color: '#FF5533',
    },
    marginBottom: '5px',
    width: '100%',
    fontSize: '20pt',
  },
  text: {
    color: '#D9EFD9'
  },
  divider: {
    height: '14px',
    visibility: 'hidden'
  },
  tokenInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  }
}))