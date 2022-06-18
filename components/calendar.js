import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import daygrid from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState, useEffect, useContext, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { supabase } from "../utils/supabaseClient";
import { UserContext } from "./UserContext";
import {CreateEvent} from "./create_event";

// fix the bug where the calander gose back to today if you click create event on a different week

//make it so you can edit a event

const Calendar = () => {
  const user = useContext(UserContext);
  const [value, setValue] = useState(false);
  const [coach, setCoach] = useState(`${user.name}`);
  const [eventIds, setEventIds] = useState([]);

  const handleClose = () => {
    setValue(false);
    setCoach(`${user.name}`);
  };
  const handleShow = () => {
    setValue(true);
    setCoach(`${user.name}`);
  };

  const Destop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 1000 });
    return isTablet ? children : null;
  };

  const Mobile = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 999 });
    return isTablet ? children : null;
  };

  const callEvents = useMemo(()=> {
    if(!user) return [];

    return (user.events || []).map(event => {
      return {
        title: `${event.id}`,
        start: `${event.start_time}`,
        end: `${event.end_time}`,
      }
    });
  }, [user]);

  return (
    <>
      {user.loading == false ? (
        <>
          <Destop>
            <div style={{ marginLeft: "2.5%", marginRight: "2.5%" }}>
              <FullCalendar
                plugins={[
                  timeGridPlugin,
                  interactionPlugin,
                  daygrid,
                  bootstrapPlugin,
                ]}
                editable
                selectable
                themeSystem="bootstrap"
                height="auto"
                titleFormat={{
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }}
                customButtons={{
                  createEvent: {
                    text: "Create Event",
                    click: function () {
                      handleShow();
                    },
                  },
                }}
                headerToolbar={{
                  left: "prev,next createEvent today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                events={callEvents}
                businessHours={[
                  {
                    daysOfWeek: [1, 2, 3, 4, 5, 6],
                    startTime: "9:00",
                    endTime: "20:00",
                  },
                ]}
                nowIndicator={true}
                dateClick={(info) => setValue(true)}
                eventClick={(info) => setValue(true)}
              />
            </div>
          </Destop>
          <Mobile>
            <div style={{ marginLeft: "2.5%", marginRight: "2.5%" }}>
              <FullCalendar
                plugins={[
                  timeGridPlugin,
                  interactionPlugin,
                  daygrid,
                  bootstrapPlugin,
                ]}
                editable
                selectable
                themeSystem="bootstrap"
                height="699px"
                titleFormat={{
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }}
                customButtons={{
                  createEvent: {
                    text: "Create Event",
                    click: function () {
                      setValue(true);
                    },
                  },
                }}
                headerToolbar={{
                  left: "title",
                  center: "prev,next today createEvent",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                events={[
                  { title: "time", start: new Date() },
                  { title: "time", start: new Date() },
                ]}
                businessHours={[
                  {
                    daysOfWeek: [1, 2, 3, 4, 5, 6],
                    startTime: "9:00",
                    endTime: "20:00",
                  },
                ]}
                nowIndicator={true}
                dateClick={(info) => setValue(true)}
                eventClick={(info) => setValue(true)}
              />
            </div>
          </Mobile>
          <CreateEvent show={value} onHide={handleClose} />
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Calendar;
