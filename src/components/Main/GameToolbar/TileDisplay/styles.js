import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  tileDisplay: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'gold',
    minWidth: '450px',
    maxWidth: '900px'
  },
}));
