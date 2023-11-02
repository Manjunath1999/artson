import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FilePopup = ({ open, setOpen, url }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="centered-dialog-title"
        aria-describedby="centered-dialog-description"
      >
        <DialogTitle id="centered-dialog-title">Uploaded Image</DialogTitle>
        <DialogContent>
          <DialogContentText id="centered-dialog-description">
            <img
              src={url}
              alt="Uploaded"
              style={{ width: "300px", height: "200px" }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilePopup;
