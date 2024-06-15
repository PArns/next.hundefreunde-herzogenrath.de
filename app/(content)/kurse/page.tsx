import ContentBox from "@/components/layout/default-box";
import Link from "next/link";
import Kurs from "@/components/kurs";

import { kursData } from "@/configuration/kursData";

export function generateMetadata() {
  return {
    title: "Kurse",
    Description:
      "Unsere Kurse sind auf eine Dauer von jeweis 1/2 Jahr ausgelegt und starten im April und Oktober. Ein Einstieg in die Welpen- bzw. Anfängergruppen ist aber jederzeit, auch unabhängig vom Kursbeginn möglich. Alle weiterführenden Kurse setzen den erfolgreichen Abschluss des jeweiligen Vorkurses voraus.",
  };
}

export default function Kurse() {
  const firstKurs = kursData[0];

  return (
    <>
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
          einfach bei einem der Kursleiter an.
        </p>
        <p>
          Unsere Kurse sind auf eine Dauer von jeweis 1/2 Jahr ausgelegt und
          starten im April und Oktober. Ein Einstieg in die Welpen- bzw.
          Anfängergruppen ist aber jederzeit, auch unabhängig vom Kursbeginn
          möglich. Alle weiterführenden Kurse setzen den erfolgreichen Abschluss
          des jeweiligen Vorkurses voraus.
        </p>
        <p>
          Ein Probetraining ist selbstverständlich kostenlos und unverbindlich!
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
