import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  panel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    color: 'rgb(224,241,109)',
    WebkitTextStroke: '2px #282E04',
    '&:hover':{
      color: '#FF5533',
    },
    fontFamily: 'Titan One',
    fontSize: '14pt'
  }
}))
