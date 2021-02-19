import React, { FC } from "react";
import MeetingView from "./views/MeetingView";
import TooSoonMeetingView from "./views/TooSoonMeetingView";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import CalendarView from "./views/CalendarView";
import AtTimeMeetingView from "./views/AtTimeMeetingView";  
import LibraryView from "./views/LibraryView";
import DialogContent from "./views/DialogContentView";
import ClientView from "./views/ClientView";

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
    {/* <CalendarView /> */}
    {/* <TooSoonMeetingView /> */}
    {/* <AtTimeMeetingView /> */}
    {/* <LibraryView /> */}
    <ClientView />
  </ThemeProvider>
);

export default App;
