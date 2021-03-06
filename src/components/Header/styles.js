import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'purple',
    color: 'gold',
  },
  h1: {
    fontFamily: 'Shadows Into Light',
    display: 'inline',
    padding: '10px'
  },
  button: {
    backgroundColor: 'gold',
    color: 'green',
    width: '100px',
    height: '70px',
    margin: '5px',
    fontWeight: 'bold'
  }
}));
