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
  myGamesIcon: {
    height: 30,
    width: 30,
    color: 'gold'
  },
  myGamesText: {
    color: 'gold',
    fontFamily: 'Shadows Into Light',
    fontSize: '24px'
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
    minWidth: '500px',
    padding: 10
  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
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