import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(#2B1D46, #39265D, #422C6B)',
    border: '3px solid #2B1D46',
    [theme.breakpoints.down('mobile')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-around'
    },
  }
}));