import React, { useState } from "react";
import { Box, Icon, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";

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

const DialogEventView = (props) => {
  const classes = useStyles();

  const [eventName, setEventName] = useState("");

  const [start, setStart] = useState("");

  const [end, setEnd] = useState("");

  const { isOpen, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const addEvent = () => {
    const eventFirstDate =
      props.event.startStr.slice(0, 10) + " " + start + ":00";
    const eventLastDate = props.event.startStr.slice(0, 10) + " " + end + ":00";

    const obj = {
      tid: "VF9FVkVOVE9TOjA3Mjc4NQ==",
      fid: 103,
      data: {
        NOME_EVENTO: eventName,
        DATA_INICIAL: eventFirstDate, // 2021-02-09 00:00:00 DD/MM/YYYY HH:MM
        DATA_FINAL: eventLastDate, // 2021-02-09 00:00:00 DD/MM/YYYY HH:MM
      },
      type: 1,
    };

    fetch("https://apps.blueprojects.com.br/amoterapia/Integration/Save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((response) =>
      response.json().then((responseJson) => {
        console.log("addEvent", responseJson);
      })
    );
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      classes={{ paper: classes.eventDialog }}
    >
      <DialogTitle variant="h5">
        {props.event ? props.event.title : "Evento"}
        {props.event ? (
          <Icon
            color="inherit"
            style={{ marginTop: "20px", marginLeft: "6vw" }}
          >
            <DeleteIcon />
          </Icon>
        ) : (
          ""
        )}
      </DialogTitle>
      <DialogContent dividers classes={{ root: classes.eventDialog }}>
        <DialogContentText className={classes.dialogInfo}>
          Informações do evento
        </DialogContentText>
        <TextField
          autoFocus
          variant="standard"
          color="primary"
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
            type="time"
            margin="dense"
            color="primary"
            onChange={(e) => setStart(e.target.value)}
            inputProps={{ className: classes.fieldsText }}
          />
          <TextField
            type="time"
            margin="dense"
            color="primary"
            onChange={(e) => setEnd(e.target.value)}
            inputProps={{ className: classes.fieldsText }}
          />
          {/* <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            /> */}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          color="primary"
          onClick={() => {
            addEvent();
            handleClose();
          }}
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogEventView;
