import React, { FC } from "react";
import MeetingView from "./views/MeetingView";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import CalendarView from "./views/CalendarView";

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
    {/* <MeetingView /> */}
    <CalendarView />
  </ThemeProvider>
);

export default App;
