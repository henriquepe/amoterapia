import { Typography, Icon, makeStyles, Grid } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";

const useStyles = makeStyles((theme) => ({
  clientName: {
    display: "flex",
    height: "5vh",
    background: "#EDDBEC 0% 0% no-repeat padding-box",
    borderRadius: "10px 10px 0px 0px",
    opacity: "1",
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  clientNameText: {
    color: "#5C1BA6",
  },
  therapeuticSqueme: {
    background: "#FFF800 0% 0% no-repeat padding-box",
    borderRadius: "12px",
    opacity: "1",
  },
}));

const ClientName = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.clientName}
      justify="space-between" 
    >
      <Grid item>
        <Grid
          container
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Icon color="primary" className={classes.icon}>
              <AccountCircleIcon />
            </Icon>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.clientNameText}>
              Nome do Cliente
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" className={classes.therapeuticSqueme}>
              Esquema terapêutico
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ClientName;
