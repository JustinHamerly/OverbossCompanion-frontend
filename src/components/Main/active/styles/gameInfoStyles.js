import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  gameInfoContainer: {
    backgroundColor: '#2B1D46',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Rubik',
    marginBottom: '5px',
    width: '100%',
    fontSize: '20pt',
  },
  text: {
    color: '#D9EFD9'
  }
}))