import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  banner: {
    display: 'flex',
    minWidth: '500px',
    padding: 10
  },
  h1: {
    fontFamily: 'Shadows Into Light',
    fontSize: '50pt',
    display: 'inline',
    padding: '10px',
    width: '500px',
    margin: 'auto',
    color: 'rgb(224,241,109)'
  },
  castleIcon: {
    height: 50,
    width: 50,
    margin: 'auto',
    color: 'rgb(224,241,109)'
  }
}));