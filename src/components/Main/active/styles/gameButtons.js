import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  panel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    color: '#FFDA33',
    '&:hover':{
      color: '#FF5533',
    },
  }
}))
