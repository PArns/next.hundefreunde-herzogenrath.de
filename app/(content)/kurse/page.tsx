import ContentBox from "@/components/layout/default-box";
import Link from "next/link";
import Kurs from "@/components/kurs";

import { kursData } from "@/configuration/kursData";
import Motds from "@/sections/motd";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Kurse",
    description:
      "Unsere Kurse sind auf eine Dauer von jeweis 1/2 Jahr ausgelegt und starten im April und Oktober. Ein Einstieg in die Anfängergruppen ist aber jederzeit, auch unabhängig vom Kursbeginn möglich. Alle weiterführenden Kurse setzen den erfolgreichen Abschluss des jeweiligen Vorkurses voraus.",
  };
}

export default function Kurse() {
  const firstKurs = kursData[0];

  return (
    <>
      <Motds />

      <ContentBox>
        <h2>Kurse & Zeiten</h2>
        <p>
          Unsere Kurse finden wöchentlich jeweils{" "}
          <b>samstags ab {firstKurs.startTime} Uhr</b> auf unserem{" "}
          <Link href="/anfahrt" className="text-sky-700">
            Übungsgelände
          </Link>{" "}
          statt.
        </p>
        <p>
          Solltest Du an einem Probetraining interessiert sein, so erscheine
          bitte mindestens <b>15 Minuten</b> vor Kursbeginn und melde dich
          einfach bei einem der Kursleiter an. Ein <b>Probetraining</b> ist
          selbstverständlich <b>kostenlos und unverbindlich</b>!
        </p>
        <p>
          Unsere Kurse sind auf eine Dauer von jeweis 1/2 Jahr ausgelegt und
          starten im April und Oktober. Ein Einstieg in die Welpen- bzw.
          Anfängergruppen ist aber jederzeit, auch unabhängig vom Kursbeginn
          möglich. Alle weiterführenden Kurse setzen den erfolgreichen Abschluss
          des jeweiligen Vorkurses voraus.
        </p>
        <p>
          Unsere Übungsstunden dauern jeweils <b>60 Minuten</b>, beginnen immer
          mit einer kurzen 5-minütigen Aufwärmphase und enden mit 5-10 Minuten
          freiem Spiel mit den Hunden der Kursteilnehmer.
        </p>
        <p>
          Wir bitten um Verständnis, dass wir deshalb{" "}
          <b>5 Minuten nach Kursbeginn</b> leider keine Nachzügler mehr auf die
          Wiese lassen können - seid also am besten bereits 10 Minuten vor
          Trainingsbeginn am Gelände.
        </p>
        <p>
          Rund um unser Trainingsgelände gibt es zudem genügend Möglichkeiten
          für kurze oder lange Spaziergänge. Bitte nutzt diese Möglichkeit auch{" "}
          <b>vor dem Training</b> und plant genügend Zeit ein. Schließlich
          wollen wir gemeinsam entspannt in die Stunde starten.
        </p>
        <p>
          Ebenso sind wir als Teilnehmer und Hundeführer natürlich vorbildlich
          und räumen die Hinterlassenschaften unserer Hunde sowohl draußen, als
          auch auf dem Trainingsgelände weg.
        </p>
        <h3 className="pt-4">Kursabschluss</h3>
        <p>
          Jeder unserer Kurse endet mit einer Leistungsabfrage bzw., ab der
          BGVP, mit einer Prüfung, in der das Gelernte komprimiert in praktischen
          Aufgaben abgefragt wird. Die BGVP-Prüfung besteht zusätzlich zur
          Praxis aus einer schriftlichen Prüfung und einer Prüfung in der Stadt.
        </p>
        <p>
          Um zur Prüfung zugelassen zu werden, besteht eine Anwesenheitspflicht
          von <b>mindestens 50%</b> der angebotenen Übungsstunden.
        </p>
      </ContentBox>

      {kursData.map((kurs) => (
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
    </>
  );
}
