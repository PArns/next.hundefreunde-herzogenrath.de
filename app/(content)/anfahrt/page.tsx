import ContentBox from "@/components/layout/default-box";
import Anfahrt from "@/sections/anfahrt";
import Kurse from "@/sections/kurse";
import Motds from "@/sections/motd";
import Link from "next/link";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Anfahrt & Kontakt",
    description: "Besucht uns in Herzogenrath! Grenzstr. 9, 52134 Herzogenrath - direkt an der niederländischen Grenze. Kostenlose Probestunden samstags. Eigene Parkplätze und Sanitäranlagen vorhanden.",
    keywords: [
      "Hundefreunde Herzogenrath Anfahrt",
      "Grenzstraße 9 Herzogenrath", 
      "Probestunde Hundeschule",
      "Kontakt Hundetrainer",
      "Hundeschule Aachen Umgebung",
      "Training samstags"
    ],
    openGraph: {
      title: "Anfahrt & Kontakt - Hundefreunde Herzogenrath",
      description: "Besucht uns für eine kostenlose Probestunde in Herzogenrath, Grenzstr. 9",
      type: "website",
    },
  };
}

export default function Anfart() {
  return (
    <>
      <Motds />
      
      <ContentBox>
        <header>
          <h1>Anfahrt & Kontakt</h1>
          <h2>
            Ihr findet das Trainingsgelände direkt an der niederländischen Grenze
            in Herzogenrath
          </h2>
        </header>
        <section>
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
          <p>
            Solltet ihr weitere Fragen zu den einzelnen Kursen haben, so meldet
            euch gerne direkt bei einem unserer{" "}
            <Link href="/team" className="text-sky-600">
              Trainer per E-Mail
            </Link>{" "}
            oder samstags direkt auf dem Platz!
          </p>
          <p>
            Beachtet bitte, das das <b>Training ausschließlich samstags</b> statt
            findet. Eine detailierte Terminübersicht findet ihr aber auch noch
            einmal{" "}
            <Link href="/termine" className="text-sky-600">
              HIER
            </Link>
            .
          </p>
        </section>
      </ContentBox>
      <Anfahrt />
      <Kurse />
    </>
  );
}
