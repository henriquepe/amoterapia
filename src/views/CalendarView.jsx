import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { makeStyles, Grid } from "@material-ui/core";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";
import ClientDrawer from "../containers/ClientDrawer";

const useStyles = makeStyles((theme) => ({
  calendarView: {
    background: "#F5F5F5 0% 0% no-repeat padding-box",
    opacity: 1,
  },
}));

const CalendarView = () => {
  const classes = useStyles();

  let eventGuid = 0;
  function createEventId() {
    return String(eventGuid++);
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Qual o nome do evento?");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    clickInfo.event.remove();
  };

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
                eventClick={handleEventClick}
                select={handleDateSelect}
                events={[
                  { title: "Entrevista terapêuta Jorge", date: "2021-01-23" },
                ]}
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
    </div>
  );
};

export default CalendarView;
