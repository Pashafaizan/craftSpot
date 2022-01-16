import * as React from "react";
// import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Popup(props) {
  const [open, setOpen] = React.useState(props.open);
  const [email, setEmail] = React.useState("");
  const [query, setQuery] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Query Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To purchase this product, please enter your email address here and
            send query. We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            multiline
            label="Query"
            maxRows={4}
            type="email"
            rows={3}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
