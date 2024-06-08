import ContentBox from "@/components/layout/default-box";
import Anfahrt from "@/sections/anfahrt";
import Kurse from "@/sections/kurse";
import Link from "next/link";

export default function Anfart() {
  return (
    <>
      <ContentBox>
        <h3 className="pb-2">
          Ihr findet das Trainingsgelände direkt an der niederländischen Grenze
          in Herzogenrath
        </h3>
        Wir freuen uns immer über neue Fellnasen und deren Besitzer.
        Selbstverständlich bieten wir zu unseren{" "}
        <Link href="/kurse" className="text-sky-600">
          Trainingszeiten
        </Link>{" "}
        ein unverbindliches und kostenloses Schnuppertraining an, an dem ihr
        euch gerne einmal Verein und Platz anschauen könnt. Die entsprechenden
        Termine und Trainingszeiten findet ihr{" "}
        <Link href="/kurse" className="text-sky-600">
          HIER
        </Link>
        <p className="pt-2">
          Solltet ihr weitere Fragen zu den einzelnen Kursen haben, so meldet
          euch gerne direkt bei einem unserer{" "}
          <Link href="/kurse" className="text-sky-600">
            Trainer per E-Mail
          </Link>{" "}
          oder samstags direkt auf dem Platz!
        </p>
        <p className="pt-2">
          Beachtet bitte, das das <b>Training ausschließlich samstags</b> statt
          findet. Eine detailierte Terminübersicht findet ihr aber auch noch
          einmal{" "}
          <Link href="/termine" className="text-sky-600">
            HIER
          </Link>
          .
        </p>
      </ContentBox>
      <Anfahrt />
      <Kurse />
    </>
  );
}
