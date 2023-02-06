import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'green',
    padding: '20px',
    height: '100%'
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