import React from "react";
import { Fab, Grid, makeStyles } from "@material-ui/core";
import CallEndIcon from "@material-ui/icons/CallEnd";
import MicIcon from "@material-ui/icons/Mic";
import VideocamIcon from "@material-ui/icons/Videocam";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";

const useStyles = makeStyles((theme) => ({
  meetingControls: {
    height: "10vh",

    background: "#5C1BA6 0% 0% no-repeat padding-box",
    borderRadius: "0px 0px 10px 10px",
    opacity: 1,
    marginLeft: theme.spacing(3),
    boxSizing: "border-box",
  },
  endCallIcon: {
    marginLeft: theme.spacing(2),
  },
  screenShareIcon: {
    marginRight: theme.spacing(2),
  },
}));

const MeetingControls = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.meetingControls}
    >
      <Grid item>
        <Fab color="primary" className={classes.endCallIcon}>
          <CallEndIcon />
        </Fab>
      </Grid>
      <Grid item>
        <Fab color="secondary">
          <MicIcon />
        </Fab>
      </Grid>
      <Grid item>
        <Fab color="secondary">
          <VideocamIcon />
        </Fab>
      </Grid>
      <Grid item>
        <Fab color="secondary" className={classes.screenShareIcon}>
          <ScreenShareIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default MeetingControls;
