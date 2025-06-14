import ContentBox from "@/components/layout/default-box";
import Link from "next/link";
import Kurs from "@/components/kurs";
import Calendar from "@/components/calendar";

import { kursData } from "@/configuration/kursData";
import Motds from "@/sections/motd";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Kurse, Termine und Zeiten",
    description:
      "Hundetraining für alle Altersgruppen bei den Hundefreunden Herzogenrath: Welpen, Anfänger, BGVP und Leistungskurse. Kurse dauern 6 Monate, Start im April und Oktober. Jederzeit Einstieg in Anfängergruppen möglich. Samstags Training in Herzogenrath.",
    keywords: [
      "Hundetraining Herzogenrath",
      "Welpenkurs Aachen",
      "BGVP Kurs",
      "Hundeschule Termine",
      "Anfängerkurs Hunde",
      "Leistungsprüfung Hunde",
      "Hundefreunde Herzogenrath Kurse"
    ],
    openGraph: {
      title: "Hundetraining Kurse - Hundefreunde Herzogenrath",
      description: "Welpen, Anfänger, BGVP und Leistungskurse - Professionelles Hundetraining samstags in Herzogenrath.",
      type: "website",
    },
  };
}

export default function Kurse() {
  const firstKurs = kursData[0];

  return (
    <>
      <Motds />
      <ContentBox>
        <header>
          <h1>Kurse, Termine & Zeiten</h1>
          <p className="text-lg text-gray-600 mt-2">
            Professionelles Hundetraining für alle Altersgruppen - von Welpen bis zur Leistungsklasse
          </p>
        </header>
        
        <section aria-labelledby="kurs-info">
          <h2 id="kurs-info" className="sr-only">Allgemeine Kursinformationen</h2>
          
          <div className="space-y-4">
            <p>
              Unsere Kurse finden wöchentlich jeweils{" "}
              <strong>samstags ab {firstKurs.startTime} Uhr</strong> auf unserem{" "}
              <Link href="/anfahrt" className="text-sky-700 underline">
                Übungsgelände
              </Link>{" "}
              statt.
            </p>

            <p>
              Solltest Du an einem <strong>Probetraining</strong> interessiert sein, so erscheine
              bitte mindestens <strong>15 Minuten</strong> vor Kursbeginn und melde dich
              einfach bei einem der Kursleiter an. Ein Probetraining ist
              selbstverständlich <strong>kostenlos und unverbindlich</strong>!
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-sky-400">
              <h3 className="font-semibold text-sky-900 mb-2">Wichtige Kursinformationen</h3>
              <ul className="space-y-2 text-sky-800">
                <li>• <strong>Kursdauer:</strong> 6 Monate (Start jeweils im April & Oktober)</li>
                <li>• <strong>Übungsstunden:</strong> 60 Minuten inkl. Aufwärmen & freies Spiel</li>
                <li>• <strong>Einstieg:</strong> Welpen & Anfänger jederzeit möglich</li>
                <li>• <strong>Anwesenheit:</strong> Mindestens 50% für Prüfungszulassung</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Weitere wichtige Hinweise zum Training</h3>
            <div className="space-y-3">
              <p>
                Wir bitten um Verständnis, dass wir{" "}
                <strong>5 Minuten nach Kursbeginn</strong> leider keine Nachzügler mehr auf die
                Wiese lassen können - seid also am besten bereits 10 Minuten vor
                Trainingsbeginn am Gelände.
              </p>
              <p>
                Rund um unser Trainingsgelände gibt es zudem genügend Möglichkeiten
                für kurze oder lange Spaziergänge. Bitte nutzt diese Möglichkeit auch{" "}
                <strong>vor dem Training</strong> und plant genügend Zeit ein.
              </p>
              <p>
                Ebenso sind wir als Teilnehmer und Hundeführer natürlich vorbildlich
                und räumen die Hinterlassenschaften unserer Hunde sowohl draußen, als
                auch auf dem Trainingsgelände weg.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="kursabschluss">
          <h2 id="kursabschluss" className="pt-6 text-xl font-semibold">Kursabschluss & Prüfungen</h2>
          <div className="space-y-3 mt-3">
            <p>
              Jeder unserer Kurse endet mit einer <strong>Leistungsabfrage</strong> bzw., ab der
              BGVP, mit einer <strong>offiziellen Prüfung</strong>, in der das Gelernte komprimiert in
              praktischen Aufgaben abgefragt wird.
            </p>
            <p>
              Die <strong>BGVP-Prüfung</strong> besteht zusätzlich zur Praxis aus einer 
              schriftlichen Prüfung und einer Prüfung in der Stadt.
            </p>
          </div>
        </section>

        <section aria-labelledby="termine" className="mt-8">
          <h2 id="termine" className="text-xl font-semibold mb-4">Aktuelle Termine</h2>
          <Calendar
            calendarId={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID}
            googleApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            className="border rounded-lg p-4 bg-gray-50"
          />
        </section>
      </ContentBox>

      <section aria-labelledby="kurs-angebot">
        <h2 id="kurs-angebot" className="sr-only">Unser Kursangebot</h2>
        {kursData.map((kurs, index) => (
          <Kurs
            key={kurs.id}
            id={kurs.id}
            name={kurs.name}
            img={kurs.img}
            leiter={kurs.leiter}
            startTime={kurs.startTime}
          >
            {kurs.contentLong}
          </Kurs>
        ))}
      </section>
    </>
  );
}
