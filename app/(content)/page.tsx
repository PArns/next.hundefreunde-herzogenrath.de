import ContentBox from "@/components/layout/default-box";
import Anfahrt from "@/sections/anfahrt";
import Bilder from "@/sections/bilder";
import Kurse from "@/sections/kurse";
import Motds from "@/sections/motd";
import News from "@/sections/neuigkeiten";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

export function generateMetadata(): Readonly<Metadata> {
  return {
    title: "Über uns",
    description:
      "Die Hundefreunde Herzogenrath sind die freundliche Hundeschule in der Städteregion Aachen - Besucht uns doch einmal für eine kostenlose Probestunde!",
  };
}

export default function Home() {
  return (
    <>
      <Motds />

      <ContentBox>
        <h2>Willkommen bei den Hundefreunden Herzogenrath e.V.</h2>
        <h3>Die Hundeschule in der StädteRegion Aachen</h3>
        <p>
          Herzlich willkommen auf der offiziellen Webseite der Hundefreunde
          Herzogenrath e.V.{" "}
        </p>
        <div className="flex flex-col md:flex-row">
          <div>
            <h3 className="mt-2">Die Hundefreunde Herzogenrath</h3>
            <p>
              sind seit 1996 ein eingetragener Verein. Wir blicken damit auf
              eine lange Geschichte und viel Erfahrung zurück.
            </p>
            <p>
              Unsere ehrenamtlichen Trainer geben Euch hier, in einfachen
              Schritten, nachvollziehbare und effektive Trainingseinheiten,
              gepaart mit viel Spaß und Humor.
            </p>
            <p className="mt-4">
              Ganz klassisch bieten wir in verschiedenen Gruppen das Training
              und die Erziehung des Hundes, vor allem aber auch die des
              Hundeführers an. Hierbei unterteilen wir die Ausbildung und das
              Training in verschiedene Gruppen, je nach Wissensstand und Alter
              der Hunde.
            </p>
            <ul className="ml-10 list-disc">
              <li>Anfänger - Einsteigerkurs</li>
              <li>BGVP - Begleit- Gehorsams- &amp; Verkehrs-Prüfung</li>
              <li>Leistung (mit Abzeichen Bronze, Silber & Gold)</li>
            </ul>
            <p className="mt-4">
              Abgerundet werden die jeweils 6 Monate dauernden Kurse mit einer
              entsprechenden Leistungsabfrage bzw. Prüfung. Aber keine Sorge,
              wir arbeiten zusammen mit Euch auf das Semesterende hin!
            </p>
            <p>
              Beachtet bitte, aufgrund dessen, dass wir ein Verein sind und alle
              unsere{" "}
              <Link href="/team" className="text-sky-700">
                Trainer und Helfer
              </Link>{" "}
              ehrenamtlich auf dem Platz stehen, der Trainingsbetrieb{" "}
              <b>ausschließlich Samstags</b> statt findet! Auch bieten wir
              leider keinen Einzelunterricht an.
            </p>
            <p>
              <Link href="/anfahrt" className="text-sky-700">
                Besucht uns doch einfach einmal zu einer Probestunde!
              </Link>
            </p>
          </div>
          <div>
            <Image
              src={"/team/trainer.jpg"}
              className="mt-16 mr-20 rounded-full drop-shadow-lg"
              width={500}
              height={500}
              alt="Trainer"
            />
          </div>
        </div>
      </ContentBox>

      <Bilder />
      <News />
      <Kurse />
      <Anfahrt />
    </>
  );
}
