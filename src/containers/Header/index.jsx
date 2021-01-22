import { Typography, Icon, makeStyles, AppBar, Toolbar } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: '#2F0959 0% 0% no-repeat padding-box',
    opacity: 1,
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    color: '#F2E232',
  },
  therapist:{
    paddingRight: theme.spacing(5),
  },
  controls: {
    paddingRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
    <Toolbar>
      <Typography variant="h6" className={classes.logo}>
        Amoterapia
      </Typography>
      <div className={classes.grow} />
      <Typography variant='body1' className={classes.therapist}>
        Nome do terapeuta
      </Typography>
      <Icon color='primary' className={classes.controls}>
        <ArrowDropDownCircleIcon />
      </Icon>
      <Icon color='primary' className={classes.controls}>
        <ExitToAppIcon/>
      </Icon>
    </Toolbar>
    </AppBar>
  );
};

export default Header;