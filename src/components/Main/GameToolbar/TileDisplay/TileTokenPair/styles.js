import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  pair: {
    display: 'flex',
    width: '400px',
    height: '400px',
    margin: '10px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'purple',
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
