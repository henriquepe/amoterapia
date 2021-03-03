import React, { useEffect } from "react";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import MeetingControls from "../containers/MeetingControls";
import MeetingName from "../containers/MeetingName";
import MeetingVideo from "../containers/MeetingVideo";
import MeetingDrawer from "../containers/MeetingDrawer";
import { makeStyles, Grid } from "@material-ui/core";
import { ThemeProvider } from 'styled-components';
import {
  MeetingProvider,
  lightTheme
} from 'amazon-chime-sdk-component-library-react';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  meetingView: {
    background: "#FAEDF9 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "100%",
  },
}));

const MeetingView = (props) => {
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
              <ThemeProvider theme={lightTheme}>
                <MeetingProvider>
                  <MeetingVideo />
                </MeetingProvider>
              </ThemeProvider>
            </Grid>
            {/* <Grid item>
              <MeetingControls />
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container style={{ height: "100%", paddingLeft: "5.3vw" }}>
            <Grid item>
              { props.hideMeetingDrawer ? "" : <MeetingDrawer /> }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    hideMeetingDrawer: state.reducer.hideMeetingDrawer,
  }
}

export default connect(mapStateToProps)(MeetingView);
