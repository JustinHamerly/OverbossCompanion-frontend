import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    marginLeft: '10px',
  },
  myGamesIcon: {
    color: '#FFDA33',
    '&:hover':{
      color: '#FF5533'
    }
  },
  myGamesText: {
    color: 'rgb(224,241,109)',
    '&:hover':{
      color: '#FF5533',
      textShadow: '0px -8px 5px #FFDA33',
    },
    WebkitTextStroke: '2px #282E04',
    fontFamily: 'Titan One',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16pt',
    },
    [theme.breakpoints.up('md')]: {
      textShadow: '0px -3px #FFDA33',
      fontSize: '20pt',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '32pt'
    },
  }
}));