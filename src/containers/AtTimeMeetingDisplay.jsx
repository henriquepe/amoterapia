import { Button, Card, CardContent, Divider, Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AtTimeImg from "../assets/img/imagem-02.png";
import React from "react";
import RouterHistory from "../core/router/RouterHistory";

const useStyles = makeStyles((theme) => ({
  atTimeMeetingDisplay: {  
    height: "70vh",

    background: "#FFFFFF 0% 0% no-repeat padding-box",
    opacity: 1,
    marginLeft: theme.spacing(3),
  },
  atTimeContent: {
    marginLeft: "2vw",
  },
  atTimeCard: {
    width: "16.927083333333332vw",
    background: "#EDDBEC 0% 0% no-repeat padding-box",
    color: "#5C1BA6",
    borderRadius: "25px",
  },
  attendanceCard: {
    width: "20.15625vw",
    background: "#EDDBEC 0% 0% no-repeat padding-box",
    color: "#5C1BA6",
    borderRadius: "25px",
  },
  buttons: {
    width: "20.15625vw",
    background: "#5C1BA6 0% 0% no-repeat padding-box;",
    color: 'white'
  },
}));

const AtTimeMeetingDisplay = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.atTimeMeetingDisplay}
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <Grid container>
          <Grid item>
            <img src={AtTimeImg} alt="Imagem está na hora" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          spacing={3}
          className={classes.atTimeContent}
        >
          <Grid item>
            <Card className={classes.atTimeCard}>
              <CardContent>
                <Typography variant="h6" style={{ fontSize: 16 }}>
                  Está na hora do show! Você já pode iniciar o atendimento.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.attendanceCard}>
              <CardContent>
                <Grid container direction="row" alignItems="center" spacing={1}>
                  <Grid item>
                    <Icon color="default">
                      <VoiceChatIcon />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" gutterBottom>
                      Atendimento com o Luiz
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container direction="row" alignItems="center" spacing={1}>
                  <Grid item>
                    <Icon color="default">
                      <DateRangeIcon />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">07 de Setembro 2020</Typography>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" spacing={1}>
                  <Grid item>
                    <Icon color="default">
                      <AccessTimeIcon />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">08:00 às 09:00</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.buttons}
              onClick={() => {
                RouterHistory.push("/videochamada");
              }}
            >
              Iniciar Atendimento
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AtTimeMeetingDisplay;
