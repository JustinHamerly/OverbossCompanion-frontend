import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  menuIcon: {
    height: 50,
    width: 50,
    color: 'gold'
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuButton: {
    margin: '0 15',
    display: 'block',
  }
}));