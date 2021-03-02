import React from "react";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import MeetingName from "../containers/MeetingName";
import { makeStyles, Grid } from "@material-ui/core";
import AtTimeMeetingDisplay from "../containers/AtTimeMeetingDisplay";
import BeforeMeetingDrawer from "../containers/BeforeMeetingDrawer";
import { connect } from "react-redux";
import LibraryDrawer from "../containers/LibraryDrawer";

const useStyles = makeStyles((theme) => ({
  atTimeMeetingView: {
    background: "#FAEDF9 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "100%",
  },
}));

const AtTimeMeetingView = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.atTimeMeetingView}>
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
              <AtTimeMeetingDisplay />
            </Grid>
<<<<<<< HEAD
            <Grid item>
            </Grid>
=======
>>>>>>> ce082c7668756f5467f0d1fabfb44da4ef14c160
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
    openLibraryDrawer: state.reducer.libraryDrawer
  }
}

export default connect(mapStateToProps)(AtTimeMeetingView);