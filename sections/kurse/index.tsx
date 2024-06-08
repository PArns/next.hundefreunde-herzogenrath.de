import KursBox from "@/components/kursbox";

export default function Kurse({ className }: { className?: string }) {
  return (
    <div
      className={`${className} grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-4`}
    >
      <KursBox
        name="Welpen"
        imageName={"/kurse/welpen.jpg"}
        timeText="Der Welpenkurs findet von 13:00 Uhr bis 14:00 Uhr statt"
      >
        Der Welpenkurs ist für die Kleinsten unter unseren Vierbeinern gedacht
        und bietet für Hunde, bis 6 Monate, sowie Herrchen und Frauchen eine
        Grundeinführung für den neuen Hausbewohner an.
      </KursBox>

      <KursBox
        name="Anfänger"
        imageName={"/kurse/anfaenger.jpg"}
        timeText="Der Anfängerkurs findet von 14:00 Uhr bis 15:00 Uhr statt"
      >
        Der Anfängerkurs ist für alle Vierbeiner ab 6 Monaten und legt den
        Grundstein für das weitere Training.
      </KursBox>

      <KursBox
        name="BGVP"
        imageName={"/kurse/bgvp.jpg"}
        timeText="Der BGVP-Kurs findet von 15:15 Uhr bis 16:15 Uhr statt"
      >
        In diesem Kurs, der mit einer der anspruchvollsten ist, findet das
        Training primär ohne Leine statt und bereitet Herrchen, Frauchen und
        Hund auf viele Alltagssituationen vor.
      </KursBox>

      <KursBox
        name="Leistung"
        imageName={"/kurse/leistung.jpg"}
        timeText="Der Leistungskurs findet von 16:30 Uhr bis 17:30 Uhr statt"
      >
        Im Leistungskurs werden die Übungen der BGVP weiter vertieft. Hier
        können die Teilnehmer die Leistungsabzeichen Bronze, Silber und Gold
        erwerben.
      </KursBox>
    </div>
  );
}
