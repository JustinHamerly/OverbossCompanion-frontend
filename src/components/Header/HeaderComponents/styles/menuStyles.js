import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    marginRight: '10px'
  },
  menuIcon: {
    color: '#FFDA33'
  },
  mText: {
    color: 'rgb(224,241,109)',
    fontFamily: 'Titan One',
    WebkitTextStroke: '2px #282E04',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16pt'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20pt',
      textShadow: '0px -3px #FFDA33',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '35pt',
    },
  },
}));
