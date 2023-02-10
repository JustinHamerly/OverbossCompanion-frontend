import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  container: {
    backgroundColor: "#422C6B",
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: '20pt',
    textShadow: '0px -3px #2B1D46',
    backgroundColor: '#2B1D46',
    borderRadius: '10px',
    marginBottom: '5px',
    display: 'inline-block'
  },
  text: {
    color: '#D9EFD9'
  }
}))