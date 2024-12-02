"use client";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

import deLocale from "@fullcalendar/core/locales/de";

export default function Calendar({
  calendarId,
  googleApiKey,
  className,
}: {
  calendarId: string | undefined;
  googleApiKey: string | undefined;
  className?: string;
}) {
  const eventData = {
    googleCalendarId: calendarId,
  };

  return (
    <div className={className}>
      <div className="hidden lg:block">
        <FullCalendar
          plugins={[timeGridPlugin, googleCalendarPlugin]}
          initialView="timeGridWeek"
          locale={deLocale}
          googleCalendarApiKey={googleApiKey}
          events={eventData}
          hiddenDays={[1, 2, 3, 4, 5]}
          eventDisplay="block"
          slotMinTime={"11:00:00"}
          slotMaxTime={"20:00:00"}
          slotDuration={"00:15:00"}
          nowIndicator={true}
          businessHours={[
            { daysOfWeek: [6], startTime: "13:30", endTime: "18:00" },
          ]}
        />
      </div>
      <div className="lg:hidden">
        <FullCalendar
          plugins={[listPlugin, googleCalendarPlugin]}
          initialView="listWeek"
          locale={deLocale}
          googleCalendarApiKey={googleApiKey}
          events={eventData}
        />
      </div>
    </div>
  );
}
