import {
  Button,
  Grid,
  Icon,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  attendanceData: {
    height: "78vh",

    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "0px 0px 10px 10px",
    opacity: 1,
    marginLeft: theme.spacing(3),
  },
  section: {
    width: "20vw",
    height: "73.47781217750259vh",
    maxHeight: "70vh",
    overflow: "auto",

    backgroundColor: "white",
    border: "1px solid #C3BACE",
    opacity: 1,
  },
  attendanceBlock: {
    height: "4.953560371517028vh",
    width: "19.166666666666668vw",

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
  attendanceHour: {
    color: "#575757",
  },
  contentText: {
    color: "#707070",
  },
  buttons: {},
}));

const ClientData = (props) => {
  const classes = useStyles();

  const [notes, setNotes] = React.useState([]);

  const [noteContent, setNoteContent] = React.useState("");

  const getNotes = () => {
    const obj = {
      qid: "ANOTACOES:ANOTACOES",
    };

    fetch("https://apps.blueprojects.com.br/amoterapia/Integration/Query", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setNotes(responseJson.list);
      });
  };

  const onHandleClickArrow = (noteBlock) => {
    return (
      <Grid item>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Paper variant="outlined" className={classes.content}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Grid container justify="space-between">
                    <Grid item>
                      <Typography variant="h5" className={classes.contentTitle}>
                        {noteBlock.titulo}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" className={classes.contentText}>
                        Histórico: {noteBlock.data}
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
                    {noteBlock.texto}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              className={classes.buttons}
            >
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
    );
  };

  useEffect(() => {
    getNotes();
  });

  return (
    <Grid
      container
      className={classes.attendanceData}
      alignItems="center"
      justify="space-between"
    >
      <Grid item>
        <Paper variant="outlined" className={classes.section}>
          {notes.map((noteBlock) => {
            return (
              <Grid container direction="column" spacing={8}>
                <Grid item>
                  <Paper className={classes.attendanceBlock} key={noteBlock.id}>
                    <Grid container justify="space-between" alignItems="center">
                      <Grid item>
                        <Icon color="primary">
                          <AccountCircleIcon />
                        </Icon>
                      </Grid>
                      <Grid item>
                        <Typography color="primary" variant="subtitle2">
                          {noteBlock.titulo}
                        </Typography>
                        <Typography
                          variant="body2"
                          className={classes.attendanceHour}
                        >
                          {noteBlock.data}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          className={classes.arrowDiv}
                          onClick={() => {
                            setNoteContent(onHandleClickArrow(noteBlock));
                          }}
                        >
                          <Grid item>
                            <Icon>
                              <ArrowRightIcon />
                            </Icon>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            );
          })}
        </Paper>
      </Grid>
      {noteContent}
    </Grid>
  );
};

export default ClientData;
