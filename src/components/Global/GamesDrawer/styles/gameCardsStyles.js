import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    height: '100%',
    background: 'linear-gradient(#2B1D46, #39265D, #422C6B)',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusText: {
    textAlign: 'center',
    fontFamily: 'Rubik',
    color: '#FFDA33',
    margin: '15px',
    fontSize: '15pt',
    [theme.breakpoints.up('md')]: {
      fontSize: '22pt',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '35pt',
    }
  }
}))