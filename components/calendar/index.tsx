"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
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
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          locale={deLocale}
          googleCalendarApiKey={googleApiKey}
          events={eventData}
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
