import ContentBox from "@/components/layout/default-box";
import DynamicMap from "@/components/map/dynamic-map";
import Kurse from "@/sections/kurse";
import Image from "next/image";

export function generateMetadata() {
  return {
    title: "Über uns",
    Description:
      "Die Hundefreunde Herzogenrath sind die Hundeschule im Kreis Aachen - Besucht uns doch einmal für eine kostenlose Probestunde!",
  };
}

export default function Home() {
  return (
    <>
      <ContentBox>
        <h2>Willkommen bei den Hundefreunden Herzogenrath e.V.</h2>
        <h3>Der Hundeschule im Kreis Heinsberg</h3>
        <p className="pt-2">
          Herzlich willkommen auf der offiziellen Webseite der Hundefreunde
          Herzogenrath e.V.! <br />
          Wir sind ein engagierter Verein für Hundesport, Ausbildung und
          gemeinsames Erleben in Herzogenrath und Umgebung. Bei uns steht die
          Beziehung zwischen Mensch und Hund im Mittelpunkt. Informiere dich
          über unsere Angebote, Veranstaltungen und Trainingsmöglichkeiten.
        </p>
        <div className="flex flex-col md:flex-row">
          <div>
            <h3 className="pt-6">Die Hundefreunde Herzogenrath</h3>
            <p className="my-2">
              gibt es seit 1996. Wir blicken damit auf eine lange Geschichte und
              viel Erfahrung zurück.
            </p>
            <p className="my-4">
              Unsere ehrenamtlichen Trainer geben Euch hier, in einfachen
              Schritten, nachvollziehbare und effektive Trainingseinheiten.
            </p>
            <p className="my-4">
              Ganz klassisch bieten wir in verschiedenen Gruppen das Training
              und die Erziehung des Hundes, vorallem aber auch die des
              Hundeführers an. Hierbei unterteilen wir die Ausbildung und das
              Training in verschiedene Gruppen, je nach Wissensstand und Alter
              der Hunde.
            </p>
            <ul className="ml-10 list-disc">
              <li>Welpen - Für Hunde bis 6 Monate</li>
              <li>Anfänger - Einsteigerkurs</li>
              <li>BGVP - Begleit- Gehorsam- &amp; Verkehrs-Prüfung</li>
              <li>Leistung (mit Abzeichen Bronze, Silber & Gold)</li>
            </ul>
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

      <ContentBox>
        <div className="pb-4">
          <h2>Hundefreunde Herzogenrath e.V.</h2>
          <h3>Grenzstr. 9</h3>
          <h3>52134 Herzogenrath</h3>
        </div>
        <div className="h-[500px]">
          <DynamicMap position={[50.880173, 6.087774]}>
            <b>Hundefreunde Herzogenrath e.V.</b>
            <br />
            Grenzstr. 9 - 52134 Herzogenrath
          </DynamicMap>
        </div>
      </ContentBox>
    </>
  );
}
