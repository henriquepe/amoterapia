import { makeStyles, Typography, Grid, Icon, BottomNavigation, BottomNavigationAction, Select, MenuItem, Paper, Box, ButtonGroup, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import AppsIcon from '@material-ui/icons/Apps';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ImageIcon from '@material-ui/icons/Image';
import DescriptionIcon from '@material-ui/icons/Description';
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DialogContentView from "../views/DialogContentView";

const useStyles = makeStyles((theme) => ({
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
}));

const LibraryDrawer = () => {
  const [contentDialogOpen, setContentDialogOpen] = React.useState(false);

  const [contents, setContents] = React.useState([]);

  const [ content, setContent ] = React.useState({});

  const getContents = () => {
    const obj = {
      qid : 'BIBLIOTECA:BIBLIOTECA'
    }
  
    fetch('https://apps.blueprojects.com.br/amoterapia/Integration/Query', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
      }).then((response) => response.json()).then((responseJson) => {
        setContents(responseJson.list)
      });
  }

  useEffect(()  => {
    getContents();
  }, )

  const classes = useStyles();

  const therapeuticInterview = [{ title: "Entrevista terapêutica" }];

  const lopicle = [{ title: "Lopículo" }];

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onLoadIcons = (archiveType) => {
    switch (archiveType) {
      case "Vídeo":
        return <OndemandVideoIcon />
      case "Foto":
        return <ImageIcon />
      case "PDF":
        return <DescriptionIcon />
      default:
        break;
    }
  }

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
          Biblioteca
        </Typography>
      </Grid>
      <Grid item>
        <BottomNavigation>
          <BottomNavigationAction icon={<AppsIcon />} />
          <BottomNavigationAction icon={<OndemandVideoIcon />} />
          <BottomNavigationAction icon={<ImageIcon />} />
          <BottomNavigationAction icon={<DescriptionIcon />} />
        </BottomNavigation>
      </Grid>
      <Grid item>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          className={classes.select}
          variant="outlined"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <Autocomplete
          className={classes.autocomplete}
          options={therapeuticInterview}
          getOptionLabel={(option) => option.title}
          color="primary"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Entrevista terapêutica"
              variant="outlined"
            />
          )}
        />
      </Grid>
      {contents.map((index) => {
        return (
          <Grid item>
            <Paper className={classes.contents}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Icon color="primary">
                    {onLoadIcons(index.tipo)}
                  </Icon>
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
                      console.log(index)
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
        )
      })}
      <DialogContentView isOpen={contentDialogOpen} setOpen={setContentDialogOpen} content={content}/>
    </Grid>
  );
};

export default LibraryDrawer;
