import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    color: '#422C6B',
    backgroundColor: '#e0f16d',
    padding: '5px',
    borderRadius: '5px',
    border: '2px solid #282E04',
    '&:hover':{
      color: '#FF5533',
      backgroundColor: '#ffda33'
    },
    textDecoration: 'none',
    fontWeight: 'bold'
  }
}));
