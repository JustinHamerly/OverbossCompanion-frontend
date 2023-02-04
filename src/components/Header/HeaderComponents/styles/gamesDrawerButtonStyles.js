import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    marginLeft: '10px'
  },
  myGamesIcon: {
    color: '#FFDA33'
  },
  myGamesText: {
    color: 'rgb(224,241,109)',
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
      fontSize: '35pt'
    },
  }
}));