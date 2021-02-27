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
    marginLeft: theme.spacing(3),
  },

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
  CallIcon: {
    marginLeft: theme.spacing(2),
  },
  screenShareIcon: {
    marginRight: theme.spacing(2),
  },
}));

const MeetingVideo = () => {
  const classes = useStyles();

  const meetingManager = useMeetingManager();
  const { toggleContentShare } = useContentShareControls();
  const { toggleVideo } = useLocalVideo();
  const { muted, toggleMute } = useToggleLocalMute();

  const joinMeeting = async () => {
    var obj = {}

    // Para debugar precisa usar: https://cors-anywhere.herokuapp.com/https://b4jjyx5kfa.execute-api.us-east-2.amazonaws.com/dev/register/create'
    // Primeiro passo - https://cors-anywhere.herokuapp.com/ - Liberar request
    // Segundo passo usar - https://cors-anywhere.herokuapp.com/https://b4jjyx5kfa.execute-api.us-east-2.amazonaws.com/dev/register/create'
    const response = await fetch('https://b4jjyx5kfa.execute-api.us-east-2.amazonaws.com/dev/register/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    });

    const data = await response.json();
    
    console.log('data.Meet', JSON.stringify(data.Meet));
    console.log('data.Attendee2', JSON.stringify(data.Attendee2));

    const joinData = {
      meetingInfo: data.Meet,
      attendeeInfo: data.Attendee,
    };

    // Use the join API to create a meeting session
    await meetingManager.join(joinData);

    // At this point you can let users setup their devices, or start the session immediately
    await meetingManager.start();
  };

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
    <Grid container className={classes.meetingVideo}>
        {/* <button onClick={joinMeeting}>Join</button> */}
        <input id="mt" />
        <input id="atd" />
        {/* <button onClick={joinMeeting2}>Join2</button> */}
          <VideoTileGrid noRemoteVideoView={<div>No one is sharing his video</div>} />
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.meetingControls}
        >
          <Grid item>
            <Fab color="secondary" className={classes.CallIcon} onClick={joinMeeting}>
              <CallIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="primary" className={classes.CallIcon} onClick={joinMeeting2}>
              <CallIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="secondary" onClick={toggleMute}>
              {muted ? <MicIcon /> : <MicOff />}
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

export default MeetingVideo;
