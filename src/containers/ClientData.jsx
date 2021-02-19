import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  clientData: {
    height: "78vh",

    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "0px 0px 10px 10px",
    opacity: 1,
    marginLeft: theme.spacing(3),
  },
  section: {
    backgroundColor: "white",
    width: "20vw",
    height: "53.14757481940144vh",

    border: "1px solid #C3BACE",
    opacity: 1,
  },
  content: {
    backgroundColor: "white",
    width: "52.8125vw",
    height: "53.14757481940144vh",

    border: "1px solid #C3BACE",
    opacity: 1,
  },
  contentTitle: {
    color: "#5C1BA6",
  },
  contentText: {
    color: "#707070",
  },
  buttons: {

  },
}));

const ClientData = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.clientData}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Paper variant="outlined" className={classes.section}>

            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Paper variant="outlined" className={classes.content}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Grid container justify="space-between">
                    <Grid item>
                      <Typography variant="h5" className={classes.contentTitle}>
                        Abordagem sobre a infância
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h7" className={classes.contentText}>
                        Histórico: 08/09/2020 - 09:25
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    paragraph
                    className={classes.contentText}
                    style={{ maxHeight: "47vh", overflow: "auto" }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" className={classes.buttons}>
              Vídeo 1
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.buttons}>
              Tags:
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ClientData;
