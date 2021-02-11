import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { addEvent } from "../store/Event/Event.actions";

const useStyles = makeStyles((theme) => ({
  eventDialog: {
    background: "#F5F5F5",
    color: "#2F0959",
  },
  dialogInfo: {
    color: theme.palette.primary.main,
  },
  fieldsText: {
    color: "black",
  },
}));

const DialogEvent = (props) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [eventName, setEventName] = useState("");

  const [firstDate, setFirstDate] = useState("");

  const [lastDate, setLastDate] = useState("");

  const eventInfos = {
    eventName,
    firstDate,
    lastDate,
  };

  const { isOpen, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        classes={{ paper: classes.eventDialog }}
      >
        <DialogTitle>Evento</DialogTitle>
        <DialogContent dividers classes={{ paper: classes.eventDialog }}>
          <DialogContentText className={classes.dialogInfo}>
            Informações do evento
          </DialogContentText>
          <TextField
            autoFocus
            variant="outlined"
            label="Nome do evento"
            margin="dense"
            multiline
            fullWidth
            color="primary"
            onChange={(e) => setEventName(e.target.value)}
            inputProps={{ className: classes.fieldsText }}
          />
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              type="date"
              margin="dense"
              color="primary"
              onChange={(e) => setFirstDate(e.target.value)}
              inputProps={{ className: classes.fieldsText }}
            />
            <TextField
              type="date"
              margin="dense"
              color="primary"
              onChange={(e) => setLastDate(e.target.value)}
              inputProps={{ className: classes.fieldsText }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={(e) => {
              dispatch(addEvent(eventInfos));
              // handleClose;
            }}
            color="primary"
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogEvent;
