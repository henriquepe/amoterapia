import { Grid, makeStyles, Fab } from "@material-ui/core";
import React from "react";
import { useMeetingManager, VideoTileGrid, useContentShareControls, useLocalVideo, useToggleLocalMute } from 'amazon-chime-sdk-component-library-react';
import CallIcon from "@material-ui/icons/Call";
import CallEndIcon from "@material-ui/icons/CallEnd";
import MicIcon from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";

const useStyles = makeStyles((theme) => ({
  meetingVideo: {
    height: "70vh",
    
    background: "#4E4E4E 0% 0% no-repeat padding-box",
    opacity: 1,
    marginLeft: theme.spacing(3)
  },

  meetingVideo2: {
    height: "70vh",
    background: "#4E4E4E 0% 0% no-repeat padding-box",
    opacity: 1,
  },

  meetingVideo3: {
    height: "2vh",
    background: "#4E4E4E 0% 0% no-repeat padding-box",
    opacity: 1,
  },

  meetingControls: {
    height: "10vh",

    background: "#5C1BA6 0% 0% no-repeat padding-box",
    borderRadius: "0px 0px 10px 10px",
    opacity: 1,
    marginLeft: theme.spacing(0),
    boxSizing: "border-box",
  },
  endCallIcon: {
    marginRight: theme.spacing(3),
  },
  CallIcon: {
    marginLeft: theme.spacing(3),
  },
  screenShareIcon: {
    marginRight: theme.spacing(2),
  },
  atTimeContent: {
    marginLeft: "2vw",
  },
}));

const MeetingVideo2 = () => {
  const classes = useStyles();

  const meetingManager = useMeetingManager();
  const { toggleContentShare } = useContentShareControls();
  const { toggleVideo } = useLocalVideo();
  const { muted, toggleMute } = useToggleLocalMute();

  const joinMeeting2 = async () => {
    var eMt = document.getElementById("mt");
    var eAtd = document.getElementById("atd");

    const mtdata = JSON.parse(eMt.value);
    const atddata = JSON.parse(eAtd.value);

    const joinData = {
      meetingInfo: mtdata,
      attendeeInfo: atddata,
    };

    // Use the join API to create a meeting session
    await meetingManager.join(joinData);

    // At this point you can let users setup their devices, or start the session immediately
    await meetingManager.start();
  };

  return (
    < Grid container className={classes.meetingVideo}>
      <VideoTileGrid noRemoteVideoView={<div> <Grid container className={classes.meetingVideo2}> </Grid> </div>}/>
      <Grid container className={classes.meetingVideo3}> <input id="mt" /> <input id="atd" /> </Grid>
        <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.meetingControls}
        >
          <Grid item>
            <Fab color="primary" className={classes.CallIcon} onClick={joinMeeting2}>
              <CallIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="secondary" onClick={toggleMute}>
              {muted ?  <MicOff /> : <MicIcon />}
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="secondary" onClick={toggleVideo}>
              <VideocamIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="secondary" className={classes.screenShareIcon} onClick={toggleContentShare}>
              <ScreenShareIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="primary" className={classes.endCallIcon}>
              <CallEndIcon />
            </Fab>
          </Grid>
        </Grid>
    </Grid>
  );
};

export default MeetingVideo2;