import React from "react";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import ClientName from "../containers/ClientName";
import { makeStyles, Grid } from "@material-ui/core";
import ClientData from "../containers/ClientData";
import ClientHistoryDrawer from "../containers/ClientHistoryDrawer";

const useStyles = makeStyles((theme) => ({
  clientView: {
    background: "#FAEDF9 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "100%",
  },
}));

const ClientView = () => {
  const classes = useStyles();

  return (
    <div className={classes.clientView}>
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
              <ClientName />
            </Grid>
            <Grid item>
              <ClientData />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container style={{ height: "100%", paddingLeft: "5.3vw" }}>
            <Grid item>
              <ClientHistoryDrawer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ClientView;