import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  container: {
    backgroundColor: '#2B1D46',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tokenInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  },
  text: {
    color: '#D9EFD9'
  },
  divider: {
    height: '10px',
    visibility: 'hidden'
  }
}))