import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  meetingVideo: {
    height: "70vh",

    background: "#4E4E4E 0% 0% no-repeat padding-box",
    opacity: 1,
    marginLeft: theme.spacing(3),
  },
}));

const MeetingVideo = () => {
  const classes = useStyles();

  return (
    // <div className={classes.meetingVideo}></div>

    <Grid container className={classes.meetingVideo}></Grid>
  );
};

export default MeetingVideo;
