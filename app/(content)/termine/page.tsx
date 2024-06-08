import Calendar from "@/components/calendar";
import ContentBox from "@/components/layout/default-box";
import Kurse from "@/sections/kurse";

export default function Termine() {
  return (
    <>
      <ContentBox>
        <h2 className="pb-1">Termine & Veranstaltungen</h2>
        Der Trainingsbetrieb findet grundsätzlich jeden Samstag statt. Die
        Entsprechenden Zeiten, sowie Veranstaltungen und Schließzeiten könnt ihr
        hier einsehen.
        <Calendar
          calendarId={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID}
          googleApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          className="pt-6"
        />
      </ContentBox>
      <Kurse />
    </>
  );
}
