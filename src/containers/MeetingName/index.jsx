import { Typography, Icon, Box, Toolbar, makeStyles, Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  meetingName: {
    display: 'flex',
    height: '5vh',
    background: '#EDDBEC 0% 0% no-repeat padding-box',
    borderRadius: '10px 10px 0px 0px',
    opacity: '1',
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  icon: {
    padding: 12,
  },
  clientName:{
    color: '#5C1BA6',
    paddingTop: 8,
    paddingRight: theme.spacing(1),
  },
  therapeuticSqueme: {
    background: '#FFF800 0% 0% no-repeat padding-box',
    borderRadius: '12px',
    opacity: '1',
    margin: theme.spacing(1.3),
    padding: theme.spacing(0.5),
  },
}));

const MeetingName = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.meetingName}>
      <Icon color='primary' className={classes.icon}>
        <AccountCircleIcon/>
      </Icon>
      <Typography variant='h6' className={classes.clientName}>
        Nome do Cliente
      </Typography>
      <Typography variant='subtitle2' className={classes.therapeuticSqueme}>
        Esquema terapêutico
      </Typography>
    </Grid>
  );
};

export default MeetingName;