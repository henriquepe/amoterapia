import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  editEventDialog: {
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

const DialogEditEvent = (props) => {
  const classes = useStyles();

  const { isOpen, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  let eventName = "";
  const handleTextFieldChange = (textFieldEventName) => {
    eventName = textFieldEventName.target.value;

    console.log(eventName);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        classes={{ paper: classes.editEventDialog }}
      >
        <DialogTitle>Evento</DialogTitle>
        <DialogContent dividers classes={{ paper: classes.editEventDialog }}>
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
            onChange={handleTextFieldChange}
            inputProps={{ className: classes.fieldsText }}
          />
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              type="date"
              margin="dense"
              color="primary"
              inputProps={{ className: classes.fieldsText }}
            />
            <TextField
              type="date"
              margin="dense"
              color="primary"
              inputProps={{ className: classes.fieldsText }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogEditEvent;
