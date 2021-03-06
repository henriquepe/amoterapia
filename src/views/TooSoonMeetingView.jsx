import React from "react";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import MeetingControls from "../containers/MeetingControls";
import MeetingName from "../containers/MeetingName";
import MeetingDrawer from "../containers/MeetingDrawer";
import { makeStyles, Grid } from "@material-ui/core";
import TooSoonMeetingDisplay from "../containers/TooSoonMeetingDisplay";
import BeforeMeetingDrawer from "../containers/BeforeMeetingDrawer";
import LibraryDrawer from "../containers/LibraryDrawer";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  tooSoonMeetingView: {
    background: "#FAEDF9 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "100%",
  },
}));

const TooSoonMeetingView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.tooSoonMeetingView}>
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
              <TooSoonMeetingDisplay />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container style={{ height: "100%", paddingLeft: "5.3vw" }}>
            <Grid item>
              { props.openLibraryDrawer ? <LibraryDrawer /> : <BeforeMeetingDrawer /> }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    openLibraryDrawer: state.reducer.libraryDrawer,
  }
}

export default connect(mapStateToProps)(TooSoonMeetingView);
