import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'


const DeleteDialog = (props) => {
  return (
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
          <Button onClick={props.deleteGame}>
            Delete
          </Button>
          <Button onClick={props.handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default DeleteDialog

