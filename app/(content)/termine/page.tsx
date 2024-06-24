import Calendar from "@/components/calendar";
import ContentBox from "@/components/layout/default-box";
import Kurse from "@/sections/kurse";
import Motds from "@/sections/motd";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Termine",
    description:
      "Der Trainingsbetrieb findet grundsätzlich jeden Samstag statt. Die Entsprechenden Zeiten, sowie Veranstaltungen und Schließzeiten könnt ihr hier einsehen.",
  };
}

export default function Termine() {
  return (
    <>
      <Motds />
      
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
