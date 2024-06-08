import ContentBox from "@/components/layout/default-box";
import DynamicMap from "@/components/map/dynamic-map";
import Anfahrt from "@/sections/anfahrt";
import Kurse from "@/sections/kurse";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Über uns",
    Description:
      "Die Hundefreunde Herzogenrath sind die Hundeschule in der StädteRegion Aachen - Besucht uns doch einmal für eine kostenlose Probestunde!",
  };
}

export default function Home() {
  return (
    <>
      <ContentBox>
        <h2>Willkommen bei den Hundefreunden Herzogenrath e.V.</h2>
        <h3>Die Hundeschule in der StädteRegion Aachen</h3>
        <p className="pt-2">
          Herzlich willkommen auf der offiziellen Webseite der Hundefreunde
          Herzogenrath e.V.{" "}
        </p>
        <div className="flex flex-col md:flex-row">
          <div>
            <h3 className="pt-6">Die Hundefreunde Herzogenrath</h3>
            <p>
              sind seit 1996 ein eingetragener Verein. Wir blicken damit auf
              eine lange Geschichte und viel Erfahrung zurück.
            </p>
            <p className="my-4">
              Unsere ehrenamtlichen Trainer geben Euch hier, in einfachen
              Schritten, nachvollziehbare und effektive Trainingseinheiten,
              gepaart mit viel Spaß und Humor.
            </p>
            <p className="my-4">
              Ganz klassisch bieten wir in verschiedenen Gruppen das Training
              und die Erziehung des Hundes, vor allem aber auch die des
              Hundeführers an. Hierbei unterteilen wir die Ausbildung und das
              Training in verschiedene Gruppen, je nach Wissensstand und Alter
              der Hunde.
            </p>
            <ul className="ml-10 list-disc">
              <li>Welpen - Für Hunde bis 6 Monate</li>
              <li>Anfänger - Einsteigerkurs</li>
              <li>BGVP - Begleit- Gehorsams- &amp; Verkehrs-Prüfung</li>
              <li>Leistung (mit Abzeichen Bronze, Silber & Gold)</li>
            </ul>
            <p className="my-4">
              Abgerundet werden die jeweils 6 Monate dauernden Kurse mit einer
              entsprechenden Leistungsabfrage bzw. Prüfung. Aber keine Sorge,
              wir arbeiten zusammen mit Euch auf das Semesterende hin!
            </p>
            <p className="my-4">
              Beachtet bitte, aufgrund dessen, das wir ein Verein sind und alle
              unsere{" "}
              <Link href="/team" className="text-sky-700">
                Trainer und Helfer
              </Link>{" "}
              ehrenamtlich auf dem Platz stehen, der Trainingsbetrieb{" "}
              <b>ausschließlich Samstags</b> statt findet! Auch bieten wir
              leider keinen Einzelunterricht an.
            </p>
            <p className="mt-4">
              <Link href="/anfahrt" className="text-sky-700">
                Besucht uns doch einfach einmal zu einer Probestunde!
              </Link>
            </p>
          </div>
          <div>
            <Image
              src={"/team/trainer.jpg"}
              className="mr-20 mt-16 rounded-full drop-shadow-lg"
              width={500}
              height={500}
              alt="Trainer"
            />
          </div>
        </div>
      </ContentBox>

      <Kurse />
      <Anfahrt />
    </>
  );
}
