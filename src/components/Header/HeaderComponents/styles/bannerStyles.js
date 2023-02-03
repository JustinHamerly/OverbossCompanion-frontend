import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  banner: {
    color: 'rgb(224,241,109)',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontFamily: 'Titan One', 
    display: 'inline',
    WebkitTextStroke: '2px #282E04',
    textShadow: '0px -3px #FFDA33',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '20pt',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40pt',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '50pt'
    },
  },
  icon: {
    color: '#FFDA33',
    margin: '0 10px',
  }
}));