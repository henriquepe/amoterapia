import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { Route, Router, Switch } from 'react-router-dom';
import RouterHistory from "./core/router/RouterHistory";
import MeetingView from "./views/MeetingView";
import TooSoonMeetingView from "./views/TooSoonMeetingView";
import CalendarView from "./views/CalendarView";
import AtTimeMeetingView from "./views/AtTimeMeetingView";  
import DialogContent from "./views/DialogContentView";
import ClientView from "./views/ClientView";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core";

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
