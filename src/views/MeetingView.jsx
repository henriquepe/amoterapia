import React from "react";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import MeetingControls from "../containers/MeetingControls";
import MeetingName from "../containers/MeetingName";
import MeetingVideo from "../containers/MeetingVideo";
import MeetingDrawer from "../containers/MeetingDrawer";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  meetingView: {
    background: "#FAEDF9 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "100%",
  },
}));

const MeetingView = () => {
  const classes = useStyles();

  return (
    <div className={classes.meetingView}>
      <Header />
      <Sidebar />

      <Grid
        container
        direction="row"
        style={{ paddingTop: "64px", height: "100%" }}
      >
        <Grid item xs={9}>
          <Grid container direction="column">
            <Grid item>
              <MeetingName />
            </Grid>
            <Grid item>
              <MeetingVideo />
            </Grid>
            <Grid item>
              <MeetingControls />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container style={{ height: "100%", paddingLeft: "5.3vw" }}>
            <Grid item>
              <MeetingDrawer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MeetingView;
