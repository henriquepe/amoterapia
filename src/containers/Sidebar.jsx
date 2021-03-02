import React from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import LocalLibraryRoundedIcon from "@material-ui/icons/LocalLibraryRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import BlockRoundedIcon from "@material-ui/icons/BlockRounded";
import RouterHistory from "../core/router/RouterHistory";
import { useDispatch } from "react-redux";
import { openLibraryDrawer } from "../Redux/Actions";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    background: "#5C1BA6",
    width: drawerWidth / 3,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawer: {
    height: "100vh",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    opacity: 1,
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [ libraryDrawer, setlibraryDrawer ] = React.useState(false);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem
          button
          onClick={() => {
            RouterHistory.push("/");
          }}
        >
          <ListItemIcon>{<DateRangeIcon color="secondary" />}</ListItemIcon>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            RouterHistory.push("/clientes");
          }}
        >
          <ListItemIcon>{<PeopleRoundedIcon />}</ListItemIcon>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setlibraryDrawer(true);
            dispatch(openLibraryDrawer(libraryDrawer));
          }}
        >
          <ListItemIcon>{<LocalLibraryRoundedIcon />}</ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>{<CreateRoundedIcon />}</ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon> Notas </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>{<FavoriteRoundedIcon />}</ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>{<BlockRoundedIcon />}</ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>{<AttachMoneyRoundedIcon />}</ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
