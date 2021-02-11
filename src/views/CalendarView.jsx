import React, {useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { makeStyles, Grid } from "@material-ui/core";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import ClientDrawer from "../containers/ClientDrawer";
import DialogEvent from "./DialogEvent";
import { connect, useDispatch } from "react-redux";
import { Calendar } from "@fullcalendar/core";
import { selectEvents } from "../store/Event/Event.actions";

const useStyles = makeStyles((theme) => ({
  calendarView: {
    background: "#F5F5F5 0% 0% no-repeat padding-box",
    opacity: 1,
  },
}));

const CalendarView = (props) => {
  const dispatch = useDispatch();

  const [events, setEvents] = React.useState([]);

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
        dispatch(selectEvents(events));
      });
  }

  useEffect(()  => {
    getEvents();
    // var calendarEl = document.getElementById('calendar');
    // console.log(calendarEl)
    // var calendar = new Calendar(calendarEl, {
    //   timeZone: 'UTC',
    //   events: [
    //     {
    //       id: 'a',
    //       title: 'my event',
    //       start: '2018-09-01'
    //     }
    //   ]
    // })
  })

  const classes = useStyles();

  const [dialogOpen, setDialogOpen] = React.useState(false);

  let eventGuid = 0;
  function createEventId() {
    return String(eventGuid++);
  }

  const handleDateSelect = (selectInfo) => {
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    calendarApi.addEvent({
      id: createEventId(),
      title: props.eventName,
      start: props.firstDate,
      end: props.lastDate,
      allDay: true,
    });

    return calendarApi;
  }

  const handleEventClick = (selectedInfo) => {
    const calendarApi = selectedInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    selectedInfo.event.remove();

    calendarApi.addEvent({
      id: createEventId(),
      title: props.eventName,
      start: props.firstDate,
      end: props.lastDate,
      allDay: true,
    });
  }

  // const addEvent = (eventInfos) => {
  //   const calendarApi = eventInfos.view.calendar;

  //   calendarApi.unselect(); // clear date selection

  //   eventInfos.event.remove();

  //   calendarApi.addEvent({
  //     id: createEventId(),
  //     title: props.eventName,
  //     start: props.firstDate,
  //     end: props.lastDate,
  //     allDay: true,
  //   });
  // }

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
                id="calendar"  //  asasasasasasasasasasaasasaasasasasasasasasasa
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locale="pt-br"
                editable={true}
                selectable={true}
                dayMaxEvents={true}
                eventClick={(e) => {
                  setDialogOpen(true);
                  handleEventClick(e);
                }}
                select={(e) => {
                  setDialogOpen(true);
                  handleDateSelect(e);
                }}
                events={
                  events.map(index => {
                    return {
                      title: index.nome_evento,
                      start: index.data_inicial,
                      end: index.data_final
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
              <ClientDrawer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DialogEvent isOpen={dialogOpen} setOpen={setDialogOpen} /*onClose={addEvent(props.eventInfos)}*/></DialogEvent>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    eventInfos: state.event,
    eventName: state.event.eventName,
    firstDate: state.event.firstDate,
    lastDate: state.event.lastDate
  }
}

export default connect(mapStateToProps)(CalendarView);