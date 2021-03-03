import { Grid, makeStyles, Fab, Button, Card, CardContent, Divider, Icon, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useMeetingManager, VideoTileGrid, useContentShareControls, useLocalVideo, useToggleLocalMute } from 'amazon-chime-sdk-component-library-react';
import CallIcon from "@material-ui/icons/Call";
import CallEndIcon from "@material-ui/icons/CallEnd";
import MicIcon from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AtTimeImg from "../assets/img/imagem-02.png";
import { hideMeetingDrawer } from "../Redux/Actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  meetingVideo: {
    height: "70vh",
    
    background: "#4E4E4E 0% 0% no-repeat padding-box",
    opacity: 1,
    marginLeft: theme.spacing(3),
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

  atTimeMeetingDisplay: {  
    height: "70vh",

    background: "#FFFFFF 0% 0% no-repeat padding-box",
    opacity: 1,
    marginLeft: theme.spacing(3),
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
  atTimeCard: {
    width: "16.927083333333332vw",
    background: "#EDDBEC 0% 0% no-repeat padding-box",
    color: "#5C1BA6",
    borderRadius: "25px",
  },
  attendanceCard: {
    width: "20.15625vw",
    background: "#EDDBEC 0% 0% no-repeat padding-box",
    color: "#5C1BA6",
    borderRadius: "25px",
  },
  buttons: {
    width: "20.15625vw",
    background: "#5C1BA6 0% 0% no-repeat padding-box;",
    color: 'white'
  },
}));

const MeetingVideo = () => {
  const [Status, setStatus] = useState(false);
  
  const [ contentShare, setContentShare ] = React.useState(false);

  const classes = useStyles();

  const dispatch = useDispatch();

  const meetingManager = useMeetingManager();
  const { toggleContentShare } = useContentShareControls();
  const { toggleVideo } = useLocalVideo();
  const { muted, toggleMute } = useToggleLocalMute();

  useEffect(() => {
    dispatch(hideMeetingDrawer(contentShare));
  })

  const StatusFunction = async () => {

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

    setStatus(!Status);
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
    <div>
      {Status ? 
      <div>
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
                <Fab
                  color="secondary"
                  className={classes.screenShareIcon}
                  onClick={() => {
                    toggleContentShare();
                    setContentShare(!contentShare);
                  }}
                >
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
      </div> 
      : 
      <div>
        <Grid
          container
          className={classes.atTimeMeetingDisplay}
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Grid container>
              <Grid item>
                <img src={AtTimeImg} alt="Imagem está na hora" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={3}
              className={classes.atTimeContent}
            >
              <Grid item>
                <Card className={classes.atTimeCard}>
                  <CardContent>
                    <Typography variant="h6" style={{ fontSize: 16 }}>
                      Está na hora do show! Você já pode iniciar o atendimento.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card className={classes.attendanceCard}>
                  <CardContent>
                    <Grid container direction="row" alignItems="center" spacing={1}>
                      <Grid item>
                        <Icon color="default">
                          <VoiceChatIcon />
                        </Icon>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" gutterBottom>
                          Atendimento com o Luiz
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                    <Grid container direction="row" alignItems="center" spacing={1}>
                      <Grid item>
                        <Icon color="default">
                          <DateRangeIcon />
                        </Icon>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">07 de Setembro 2020</Typography>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" spacing={1}>
                      <Grid item>
                        <Icon color="default">
                          <AccessTimeIcon />
                        </Icon>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">08:00 às 09:00</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.buttons} onClick={StatusFunction}>
                    Iniciar Atendimento
                  </Button>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>}
    </div>
  );
};

export default MeetingVideo;