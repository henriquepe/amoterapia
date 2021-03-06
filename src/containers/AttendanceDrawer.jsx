import {
  makeStyles,
  Typography,
  Grid,
  Icon,
  Paper,
} from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TooSoonMeetingView from "../views/TooSoonMeetingView";
import AtTimeMeetingView from "../views/AtTimeMeetingView";
import RouterHistory from "../core/router/RouterHistory";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "15.833333333333334vw",
    height: '100%',

    background: "#FFFFFF 0% 0% no-repeat padding-box",
    opacity: 1,
  },
  titles: {
    color: "#5C1BA6",
    opacity: 1,
  },
  client: {
    height: "4.953560371517028vh",
    width: "14.947916666666666vw",

    background: "#FAEDF9 0% 0% no-repeat padding-box",
    borderRadius: "10px",
    opacity: 1,
  },
  arrowDiv: {
    width: "2.0833333333333335vw",
    height: "4.953560371517028vh",

    background: "#5C1BA6 0% 0% no-repeat padding-box",
    borderRadius: "0px 10px 10px 0px",
    opacity: 1,
  },
  scheduleText: {
    color: "#575757",
  },
}));

const AttendanceDrawer = (props) => {
  const classes = useStyles();

  const [atTimeMeeting, setAtTimeMeeting] = React.useState(false);

  const [tooSoonMeeting, setTooSoonMeeting] = React.useState(false);

  return (
    <Grid
      container
      className={classes.drawer}
      direction="column"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography variant="subtitle2" className={classes.titles}>
          Próximos atendimentos:
        </Typography>
      </Grid>
      {props.events.map((eventBlock) => {
        return (
          <Grid item key={eventBlock.id}>
            <Paper className={classes.client}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Icon color="primary">
                    <AccountCircleIcon />
                  </Icon>
                </Grid>
                <Grid item>
                  <Typography color="primary" variant="subtitle2">
                    {eventBlock.nome_evento}
                  </Typography>
                  <Typography variant="body2" className={classes.scheduleText}>
                    {eventBlock.data_inicial}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.arrowDiv}
                    onClick={() => {
                      new Date(Date.now()).toISOString().replace('T', ' ').slice(0, 16) === eventBlock.data_inicial ? RouterHistory.push('/estanahora') : RouterHistory.push('/muitocedo');
                    }}
                  >
                    <Icon>
                      <ArrowRightIcon />
                    </Icon>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )
      })}
    </Grid>
  )
};

/* <Grid item>
  <Typography variant="subtitle2" className={classes.titles}>
    Atendimentos em andamento
  </Typography>
</Grid>
<Grid item>
  <Paper className={classes.client}>
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Icon color="primary">
          <AccountCircleIcon />
        </Icon>
      </Grid>
      <Grid item>
        <Typography color="primary" variant="subtitle2">
          {eventBlock.nome_evento}
        </Typography>
        <Typography variant="body2" className={classes.scheduleText}>
          {eventBlock.data_inicial}
        </Typography>
      </Grid>
      <Grid item>
        <Box className={classes.arrowDiv}>
          <Icon>
            <ArrowRightIcon />
          </Icon>
        </Box>
      </Grid>
    </Grid>
  </Paper>
</Grid> */

export default AttendanceDrawer;
