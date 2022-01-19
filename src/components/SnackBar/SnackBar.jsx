import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './Styles'

const CustomSnackbar = ({ open, setOpen, severity }) => {

    const classes = useStyles()
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false)
    }

    return (
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <MuiAlert
            onClose={handleClose}
            severity={severity}
            elevation={6}
            variant='filled'
          >
            {severity === "success"
              ? "Transaction created successfully"
              : severity === "warning"
              ? "Enter the data correctly"
              : "Transaction failed"}
          </MuiAlert>
        </Snackbar>
      </div>
    );
}
export default CustomSnackbar

