import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  modal: {
    backgroundColor: 'purple',
    margin: 'auto',
    width: '430px',
    maxHeight: '500px',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    width: '400px',
    backgroundColor: 'green',
    color:'white',
  },
  formTerrain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '10px',
    backgroundColor:'lightgreen'
  },
  rightForm: {
    width: '200px',
    backgroundColor: 'lightgreen',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    margin: '10px',
  },
  formTerrainInput: {
    margin: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    backgroundColor: 'gold',
  },
  fileInput: {
    width: '80%',
    margin: '10px',
    marginTop: 0,
    justifyContent: 'center',
  },
  inputLabel: {
    width: '80%',
    margin: '10px',
    marginBottom: 0,
    justifySelf: 'center'  
  },
  buttonSubmit: {
    backgroundColor: 'gold',
    color: 'purple',
    fontWeight: 'bold',
    width: '80%',
    margin: 'auto',
  },
}));