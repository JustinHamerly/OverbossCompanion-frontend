import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawerTitle: {
    fontFamily: 'Titan One',
    margin: '10px',
    marginLeft: '25px',
    WebkitTextStroke: '2px #282E04',
    color: 'rgb(224,241,109)',
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      fontSize: '20pt',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '30pt',
      textShadow: '0px -4px #FFDA33',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '50pt'
    }
  },
  closeButton: {
    color: '#422C6B',
    '&:hover':{
      color: '#FF5533',
    },
  },
  newGameButton: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '15px',
    backgroundColor: '#FFDA33',
    '&:hover':{
      backgroundColor: '#FF5533',
      color: '#FFDA33',
    },
    borderRadius: '10px',
    [theme.breakpoints.up('xs')]: {
      width: '25px',
      height: '25px',
    },
    [theme.breakpoints.up('md')]: {
      width: '80px',
      height: '30px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '130px',
      height: '40px',
    }

  },
  newGameButtonText: {
    fontFamily: 'Rubik',
    fontSize: '20pt',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20pt',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '35pt',
    }

  }
}));