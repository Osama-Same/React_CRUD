import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function Delete({ open, setOpen, onConfirm }) {
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>{"Do you want to delete an item?"}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            No
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              onConfirm();
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
