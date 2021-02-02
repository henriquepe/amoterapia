import { makeStyles, Typography, Button, Grid, Icon } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    opacity: 1,
    height: "100%",
    width: "15.833333333333334vw",
  },
  notes: {
    width: "15vw",

    border: "1px solid #C3BACE",
    borderRadius: "10px",
    opacity: 1,
  },
  noteText: {
    color: "red",
  },
  titles: {
    color: "#5C1BA6",
    opacity: 1,
  },
  autocomplete: {
    width: "14.947916666666666vw",
    height: "4.953560371517028vh",

    background: "#FAEDF9 0% 0% no-repeat padding-box",
    borderRadius: "10px",
    opacity: 1,
  },
  buttons: {
    width: "15vw",
  },
}));

const MeetingDrawer = () => {
  const [gridHeight, setGridHeight] = useState(0);

  useEffect(() => {
    const height = document.getElementById("textFieldGridItem").clientHeight;

    setGridHeight(height);
  }, []);

  const classes = useStyles();

  const therapeuticInterview = [{ title: "Entrevista terapêutica" }];

  const lopicle = [{ title: "Lopículo" }];

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
          Atendimentos em andamento:
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" className={classes.titles}>
          Técnicas introdutórias:
        </Typography>
      </Grid>
      <Grid item>
        <Autocomplete
          className={classes.autocomplete}
          options={therapeuticInterview}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Entrevista terapêutica"
              variant="outlined"
            />
          )}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          className={classes.autocomplete}
          options={lopicle}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="Lopículo" variant="outlined" />
          )}
        />
      </Grid>
      <Grid container justify="flex-start">
        <Grid item>
          <Icon color="primary" style={{ marginLeft: "8px" }}>
            <CreateRoundedIcon />
          </Icon>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.titles}>
            Bloco de notas:
          </Typography>
        </Grid>
      </Grid>
      <Grid item id="textFieldGridItem">
        <TextField
          inputProps={{ className: classes.noteText }}
          className={classes.notes}
          label="Notas"
          multiline
          variant="outlined"
          rows={gridHeight / 2.8}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" className={classes.buttons}>
          Salvar / Atualizar
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" className={classes.buttons}>
          Enviar para o cliente
        </Button>
      </Grid>
    </Grid>
  );
};

export default MeetingDrawer;