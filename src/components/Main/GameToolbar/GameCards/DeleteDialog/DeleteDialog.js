import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@material-ui/core'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const DeleteDialog = (props) => {
  return (
    <React.Fragment>
      <Button onClick={props.handleDeleteConfirm}>
        <DeleteForeverRoundedIcon />
        <Typography>DELETE GAME</Typography>
      </Button>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="delete confirmation box"
        aria-describedby="Confirm to delete game or cancel"
      >
        <DialogTitle id="delete confirmation">
          {"Delete Active Game?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert - you are about to delete your game">
            You are about to delete your game.  This cannot be undone.  Would you like to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.deleteGame} autoFocus>
            Delete
          </Button>
          <Button onClick={props.handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default DeleteDialog

