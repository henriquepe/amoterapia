import { makeStyles, Typography, Grid, Icon, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "15.833333333333334vw",
    height: "100%",

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

const ClientHistoryDrawer = (props) => {
  const [ clients, setClients ] = React.useState([]);

  const getClientHistory = () => {
    const obj = {
      qid : 'CLIENTES:CLIENTES'
    }
  
    fetch('https://apps.blueprojects.com.br/amoterapia/Integration/Query', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
      }).then((response) => response.json()).then((responseJson) => {
        setClients(responseJson.list)
      })
  }
  
  useEffect(()  => {
    getClientHistory();
  }, )

  const classes = useStyles();

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
          Histórico de Clientes:
        </Typography>
      </Grid>
      {clients.map((clientBlock) => {
        return (
          <Grid item key={clientBlock.id}>
            <Paper className={classes.client}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Icon color="primary">
                    <AccountCircleIcon />
                  </Icon>
                </Grid>
                <Grid item>
                  <Typography color="primary" variant="subtitle2">
                    {clientBlock.nome}
                  </Typography>
                  <Typography variant="body2" className={classes.scheduleText}>
                    Último atendimento: {clientBlock.data_ultimo_atendimento}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    className={classes.arrowDiv}
                  >
                    <Icon>
                      <ArrowRightIcon />
                    </Icon>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ClientHistoryDrawer;
