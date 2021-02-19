import React from "react";
import { Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ImageIcon from '@material-ui/icons/Image';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  contentDialog: {
    background: "#F5F5F5",
    color: "#2F0959",
  },
  contentTexts: {
    color: "#575757",
  },
}));

const DialogContentView = (props) => {
  const classes = useStyles();

  const { isOpen, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };


  const onLoadContent = (archiveType) => {
    switch (archiveType) {
      case "Vídeo":
        return <OndemandVideoIcon />
      case "Foto":
        return <ImageIcon />
      case "PDF":
        return <DescriptionIcon />
      default:
        break;
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      classes={{ paper: classes.contentDialog }}
    >
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Grid 
            container
            justify="space-between"
          >
            <Grid item>
              <Icon className={classes.icons}>
                <PersonAddIcon />
                <StarIcon />
              </Icon>
            </Grid>
            <Grid item>
              <Button onClick={handleClose} color="inherit">
                X
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Grid container alignItems="center" justify="center">
            <Grid item>
              <Icon>
                {onLoadContent(props.content.tipo)}
              </Icon>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid
            container
            direction="column"
          >
            <Typography variant="h6">
              {props.content.nome}
            </Typography>
            <DialogContent>
              <DialogContentText className={classes.contentTexts}>
                {props.content.texto}
              </DialogContentText>
              <DialogContentText className={classes.contentTexts}>
                {props.content.tags}
              </DialogContentText>
            </DialogContent>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default DialogContentView;
