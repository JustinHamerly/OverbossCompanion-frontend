import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '10px',
    marginBottom: '10px',
    border: '6px double #211636',
    borderRadius: '10px',
    backgroundColor: '#F0F8B7',
    [theme.breakpoints.down('md')]: {
      width: '200px'
    },
    [theme.breakpoints.up('md')]: {
      width: '300px'
    }
  },
  header: {
    backgroundColor: '#e0f16d',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'Rubik',
    color: '#211636',
    [theme.breakpoints.down('md')]: {
      fontSize: '16pt'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '22pt',
    },
  },
  sectionHeader: {
    textAlign: 'center',
    color: '#211636',
    marginTop: '3px'
  },
  text: {

  },
  buttonMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#e0f16d',
    borderRadius: '10px',
  },
  button: {
    fontFamily: 'Rubik',
    color: '#211636',
    margin: '3px',
    borderRadius: '25px',
    [theme.breakpoints.down('md')]: {
      fontSize: '12pt'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16pt',
    },
    '&:hover':{
      color: '#FF5533',
      backgroundColor: '#FFDA33'
    }
  }
}))