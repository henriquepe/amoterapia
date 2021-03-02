import React from "react";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import MeetingName from "../containers/MeetingName";
import MeetingVideo2 from "../containers/MeetingVideo2";
import MeetingDrawer from "../containers/MeetingDrawer";
import { makeStyles, Grid } from "@material-ui/core";
import { ThemeProvider } from 'styled-components';
import {
  MeetingProvider,
  lightTheme
} from 'amazon-chime-sdk-component-library-react';

const useStyles = makeStyles((theme) => ({
  meetingView: {
    background: "#FAEDF9 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "100%"
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
        style={{ paddingTop: "64px", height: "100%" /*, paddingLeft: "15vw"*/ }}
      >
        <Grid item xs={9}>
          <Grid container direction="column">
            <Grid item>
              <MeetingName />
            </Grid>
            <Grid item>
              <ThemeProvider theme={lightTheme}>
                <MeetingProvider>
                  <MeetingVideo2 />
                </MeetingProvider>
              </ThemeProvider>
            </Grid>
            {/* <Grid item>
              <MeetingControls />
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container style={{ height: "100%", paddingLeft: "5.1vw" }}>
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
