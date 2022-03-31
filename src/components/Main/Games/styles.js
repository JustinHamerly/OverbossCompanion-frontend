import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: 'green',
    color: 'gold',
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
