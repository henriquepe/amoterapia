import React, { FC } from "react";
import MeetingView from "./views/MeetingView";
import TooSoonMeetingView from "./views/TooSoonMeetingView";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import CalendarView from "./views/CalendarView";
import AtTimeMeetingView from "./views/AtTimeMeetingView";  
import LibraryView from "./views/LibraryView";
import ClientView from "./views/ClientView";
import RouterHistory from "./core/router/RouterHistory";
import { Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FF006C",
    },
    secondary: {
      main: "#F2E232",
    },
  },
});

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Router history={RouterHistory}>
      <Switch>
        <Route path="/" exact component={CalendarView} />
        <Route path="/clientes" component={ClientView} />
        <Route path="/videochamada" component={MeetingView} />
        <Route path="/biblioteca" component={LibraryView} />
        <Route path="/muitocedo" component={TooSoonMeetingView} />
        <Route path="/estanahora" component={AtTimeMeetingView} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
