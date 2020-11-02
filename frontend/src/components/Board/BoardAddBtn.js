import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, Fab, Card, Typography } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

export default function BoardAddBtn(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddBoard = () => {
    console.log(name);
    setOpen(false);
  };

  return (
    <Grid key="add-board-button" item>
      <Card className={classes.AddBoardBtn} onClick={handleClickOpen}>
        <Fab color="secondary">
          <AddIcon />
        </Fab>
        <Typography variant="subtitle2" color="secondary" style={{ marginTop: 10 }}>
          Add board
        </Typography>
      </Card>
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle id="form-dialog-title">Add new board</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddBoard} color="primary" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

const useStyles = makeStyles({
  AddBoardBtn: {
    cursor: "pointer",
    padding: "20px 40px",
    background: "transparent",
    border: "2px #ccc dashed",
    boxShadow: "none",
    textAlign: "center",
    "&:hover": {
      border: "2px #C51162 dashed",
    },
  },
});
