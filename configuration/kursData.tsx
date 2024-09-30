import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ImgWelpen from "@/public/kurse/welpen.jpg";
import ImgAnfaenger from "@/public/kurse/anfaenger.jpg";
import ImgBGVP from "@/public/kurse/bgvp.jpg";
import ImgLeistung from "@/public/kurse/leistung.jpg";

export interface Kurs {
  id: string;
  name: string;
  img: string | StaticImport;
  leiter: Array<string>;
  startTime: string;
  contentShort: React.ReactNode;
  contentLong: React.ReactNode;
}

export const kursData: Array<Kurs> = [
  {
    id: "Anfänger",
    name: "Anfänger-Kurs",
    img: ImgAnfaenger,
    leiter: ["Birgit"],
    startTime: "14:00",
    contentShort: (
      <>
        Der Anfängerkurs ist für alle Vierbeiner ab 6 Monaten gedacht. Hier wird
        der Grundgehorsam, wie Sitz, Platz und Fuß vermittelt und legt somit den
        Grundstein für das weitere Training.
      </>
    ),
    contentLong: (
      <>
        <p>
          Junghunde, ab 6 Monate und Hunde ohne Ausbildung, werden in dieser
          Gruppe zum Grundgehorsam geführt.
        </p>
        <p>
          Im Anfänger-Kurs werden die Kommandos „Hier“, „Fuß“, „Sitz“ und
          „Platz“ behandelt. Das kontrollierte Spiel der Hunde untereinander
          rundet diese Ausbildungsstufe ab.
        </p>
        <p>
          Die Ausbildung wird mit einer Leistungsabfrage der Teilnehmer
          abgeschlossen.
        </p>
      </>
    ),
  },
  {
    id: "BGVP",
    name: "BGVP-Kurs",
    img: ImgBGVP,
    leiter: ["Marianne", "Andrea"],
    startTime: "15:15",
    contentShort: (
      <>
        In diesem Kurs, der mit einer der anspruchvollsten ist, findet das
        Training primär ohne Leine statt und bereitet Herrchen, Frauchen und
        Hund auf viele Alltagssituationen vor.
      </>
    ),
    contentLong: (
      <>
        <p>
          Ziel dieser Gruppe ist das Ablegen der Begleithunde-Gehorsams-, und
          Verkehrssicherheitsprüfung, des sog. „Hundeführerscheins“. Diese
          Prüfung wird nach dem Kursende von Leistungsrichtern unseres Vereins
          abgenommen und bewertet.
        </p>
        <p>
          Mit dem Ablegen dieser Prüfung stellt der Hundeführer unter Beweis,
          dass er seinen Hund in jeder Situation beherrscht und dies nicht nur
          an der Leine, sondern auch in der Freifolge. Diese Prüfung gliedert
          sich insgesamt in 3 einzelne Teile, die jeweils einzeln bestanden
          werden müssen:
        </p>
        <ul className="ml-10 list-disc">
          <li>Schriftliche Prüfung</li>
          <li>Prüfung im öffentlichen Straßenverkehr</li>
          <li>Prüfung auf dem Übungsgelände</li>
        </ul>
      </>
    ),
  },
  {
    id: "Leistung",
    name: "Leistungs-Kurs",
    img: ImgLeistung,
    leiter: ["Patrick"],
    startTime: "16:45",
    contentShort: (
      <>
        Im Leistungskurs werden die Übungen der BGVP weiter vertieft. Hier
        können die Teilnehmer die Leistungsabzeichen Bronze, Silber und Gold
        erwerben.
      </>
    ),
    contentLong: (
      <>
        <p>
          Im Leistungskurs werden die Übungen der BGVP weiter vertieft, bei
          diesem Kurs handelt es sich um die "Königsklasse" unseres Trainings,
          bei dem alle Leistungsanwärter zusammen in einem Kurs trainieren.
          Unter anderem werden hier Übungen aus der Bewegung sowie Einheiten aus
          dem Agility-Sport absolviert.
        </p>
        <p>
          In diesem Kurs können die Teilnehmer die Leistungsabzeichen Bronze,
          Silber und Gold erwerben.
        </p>
      </>
    ),
  },
];
