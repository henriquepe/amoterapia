import React, {useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { makeStyles, Grid } from "@material-ui/core";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import AttendanceDrawer from "../containers/AttendanceDrawer";
import { connect, useDispatch } from "react-redux";
import DialogEventView from "./DialogEventView";
import LibraryDrawer from "../containers/LibraryDrawer";

const useStyles = makeStyles((theme) => ({
  calendarView: {
    background: "#F5F5F5 0% 0% no-repeat padding-box",
    opacity: 1,
  },
}));

const CalendarView = (props) => {
  const dispatch = useDispatch();

  const [events, setEvents] = React.useState([]);

  const [event, setEvent] = React.useState({});

  const [eventDialogOpen, setEventDialogOpen] = React.useState(false);

  const getEvents = () => {
    const obj = {
      qid : 'EVENTOS:EVENTOS'
    }
  
    fetch('https://apps.blueprojects.com.br/amoterapia/Integration/Query', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    }).then((response) => response.json()).then((responseJson) => {
      setEvents(responseJson.list)
    });
  }

  useEffect(()  => {
    getEvents();
  }, )

  // const removeEvent = (eventInfos) => {
  //   const calendarApi = eventInfos.view.calendar;

  //   calendarApi.unselect(); // clear date selection

  //   eventInfos.event.remove();
  // }

  const classes = useStyles();

  return (
    <div className={classes.calendarView}>
      <Header />
      <Sidebar />

      <Grid
        container
        direction="row"
        style={{ paddingTop: "64px", height: "100%" }}
      >
        <Grid item xs={9}>
          <Grid container direction="column">
            <Grid item>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locale="pt-br"
                editable={true}
                selectable={true}
                dayMaxEvents={true}
                eventClick={(e) => {
                  setEventDialogOpen(true);
                  setEvent(e.event);
                }}
                select={(e) => {
                  setEventDialogOpen(true);
                  setEvent(e);
                }}
                events={
                  events.map(event => {
                    return {
                      title: event.nome_evento,
                      start: event.data_inicial,
                      end: event.data_final
                    }
                  })
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container style={{ height: "100%", paddingLeft: "5.1vw" }}>
            <Grid item>
              { props.openLibraryDrawer ? <LibraryDrawer /> : <AttendanceDrawer events={events}/> }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DialogEventView isOpen={eventDialogOpen} setOpen={setEventDialogOpen} event={event}></DialogEventView>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    openLibraryDrawer: state.reducer.libraryDrawer,
  }
}

export default connect(mapStateToProps)(CalendarView);