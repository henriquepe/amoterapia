import {
  makeStyles,
  Typography,
  Grid,
  Icon,
  Select,
  MenuItem,
  Paper,
  ButtonGroup,
  Button,
  Dialog,
} from "@material-ui/core";
import React, { useEffect } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DialogContentView from "../views/DialogContentView";

const useStyles = makeStyles((theme) => ({
  sendClientDialog: {
    background: "#F5F5F5",
    color: "#2F0959",
  },
  btnGroup: {
    background: "#FAEDF9 0% 0% no-repeat padding-box",
    opacity: 1,
  },
  drawer: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "100%",
    width: "15.833333333333334vw",
  },
  titles: {
    color: "#5C1BA6",
    opacity: 1,
  },
  select: {
    width: "15vw",
    height: "3.3023735810113517vh",

    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #5C1BA6",
    borderRadius: "16px",
    opacity: 1,

    color: "red",
  },
  autocomplete: {
    width: "14.947916666666666vw",
    height: "4.953560371517028vh",

    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #5C1BA6",
    borderRadius: "16px",
    opacity: 1,
    color: "red",
  },
  contents: {
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
  root: {
    flexGrow: 1,
    maxWidth: 300,
    background: "#FAEDF9 0% 0% no-repeat padding-box",
    borderRadius: "41px 0px 0px 41px",
    opacity: 1,
  },
}));

const SendClientDialog = (props) => {
  const isOpen = props.sendClientDialogOpen;
  const setOpen = props.setSendClientDialogOpen;

  const [contentDialogOpen, setContentDialogOpen] = React.useState(false);

  const [contents, setContents] = React.useState([]);

  const [content, setContent] = React.useState({});

  const getContents = () => {
    const obj = {
      qid: "BIBLIOTECA:BIBLIOTECA",
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
        setContents(responseJson.list);
      });
  };

  useEffect(() => {
    getContents();
  });

  const classes = useStyles();

  const therapeuticInterview = [{ title: "Entrevista terapêutica" }];

  const lopicle = [{ title: "Lopículo" }];

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onLoadIcons = (archiveType) => {
    switch (archiveType) {
      case "Vídeo":
        return <OndemandVideoIcon />;
      case "Foto":
        return <ImageIcon />;
      case "PDF":
        return <DescriptionIcon />;
      default:
        break;
    }
  };

  const [value, setValue] = React.useState(0);

  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      classes={{ paper: classes.sendClientDialog }}
    >
      <Grid container>
        <Grid item>
          <Grid
            container
            className={classes.drawer}
            direction="column"
            spacing={2}
          >
            <Grid item>
              <Typography variant="subtitle2" className={classes.titles}>
                Biblioteca
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup
                size="large"
                color="primary"
                className={classes.btnGroup}
              >
                <Button>
                  <Icon>
                    <AppsIcon />
                  </Icon>
                </Button>
                <Button>
                  <Icon>
                    <OndemandVideoIcon />
                  </Icon>
                </Button>
                <Button>
                  <Icon>
                    <ImageIcon />
                  </Icon>
                </Button>
                <Button>
                  <Icon>
                    <DescriptionIcon />
                  </Icon>
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item>
              <Select
                value={age} // state
                onChange={handleChange}
                className={classes.select}
                variant="outlined"
                // input={<BootstrapInput />}
              >
                <MenuItem value={10}>Palavras-chave</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <Select
                value={age}
                onChange={handleChange}
                className={classes.select}
                variant="outlined"
                // input={<BootstrapInput />}
              >
                <MenuItem value={10}>Técnicas</MenuItem>
              </Select>
            </Grid>
            {contents.map((index) => {
              return (
                <Grid item>
                  <Paper className={classes.contents}>
                    <Grid container justify="space-between" alignItems="center">
                      <Grid item>
                        <Icon color="primary">{onLoadIcons(index.tipo)}</Icon>
                      </Grid>
                      <Grid item>
                        <Typography color="primary" variant="subtitle2">
                          {index.nome}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          justify="center"
                          alignItems="center"
                          className={classes.arrowDiv}
                          onClick={() => {
                            console.log(index);
                            setContent(index);
                            setContentDialogOpen(true);
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
              );
            })}
            <DialogContentView
              isOpen={contentDialogOpen}
              setOpen={setContentDialogOpen}
              content={content}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
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
      </Grid>
    </Dialog>
  );
};

export default SendClientDialog;
