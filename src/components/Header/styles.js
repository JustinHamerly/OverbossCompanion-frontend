import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    backgroundColor: 'rgb(66,44,107)',
    color: 'gold',
    minWidth: '650px'
  },
  buttonInterface: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '150px',
    height: '100%',
  },
  banner: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '500px',
  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  navigation: {
    display: 'flex',
    backgroundColor: 'rgb(76,95,57)',
    justifyContent: 'space-between',
    width: '450px',
    margin: 'auto',
    paddingLeft: '10px',
    paddingRight: '10px',
    borderRadius: '5px'
  },
  h1: {
    fontFamily: 'Shadows Into Light',
    fontSize: '50pt',
    display: 'inline',
    padding: '10px',
    width: '500px',
    margin: 'auto',
    color: 'rgb(224,241,109)'
  }
}));