import ContentBox from "@/components/layout/default-box";
import Anfahrt from "@/sections/anfahrt";
import Bilder from "@/sections/bilder";
import Kurse from "@/sections/kurse";
import Motds from "@/sections/motd";
import News from "@/sections/neuigkeiten";
import FAQ from "@/sections/faq";
import { YouTubeEmbed } from '@next/third-parties/google';
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

export function generateMetadata(): Readonly<Metadata> {
  return {
    title: "Über uns",
    description:
      "Die Hundefreunde Herzogenrath e.V. sind die freundliche Hundeschule in der Städteregion Aachen. Seit 1996 bieten wir professionelle Hundeausbildung mit erfahrenen Trainern. Besucht uns für eine kostenlose Probestunde!",
    keywords: [
      "Hundefreunde Herzogenrath",
      "Hundeschule Aachen",
      "Hundetraining Herzogenrath",
      "Welpentraining",
      "Hundeausbildung",
      "Hundeverein Aachen",
      "Probestunde",
      "Städteregion Aachen",
    ],
    openGraph: {
      title: "Hundefreunde Herzogenrath e.V. - Die Hundeschule in der Städteregion Aachen",
      description: "Seit 1996 bieten wir professionelle Hundeausbildung mit erfahrenen Trainern. Besucht uns für eine kostenlose Probestunde!",
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <>      
      <Motds />

      <ContentBox>
        <header>
          <h1>Willkommen bei den Hundefreunden Herzogenrath e.V.</h1>
          <h2>Die Hundeschule in der StädteRegion Aachen</h2>
        </header>
        
        <section>
          <p>
            Herzlich willkommen auf der offiziellen Webseite der Hundefreunde
            Herzogenrath e.V.{" "}
          </p>
          <div className="flex flex-col md:flex-row">
            <article>
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
                <li>Welpen - für Hunde bis 6 Monate</li>
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
            </article>
            <aside className="flex justify-start items-start pt-2 md:pt-12 md:ml-4">
              <Image
                src={"/team/trainer.jpg"}
                className="rounded-xl drop-shadow-lg"
                width={1200}
                height={800}
                priority={true}
                alt="Trainer der Hundefreunde Herzogenrath beim Training"
              />
            </aside>
          </div>
          <div className="flex justify-center items-center pt-4">
            <div className="w-full max-w-2xl">
              <YouTubeEmbed 
                videoid="aaQPQfe_b2E" 
                height={400}
                params="controls=1&start=0&end=0&loop=0&playsinline=0&rel=0&enablejsapi=1"
              />
            </div>
          </div>
        </section>
      </ContentBox>

      <Bilder />
      <News />
      <FAQ />
      <Kurse />
      <Anfahrt />
    </>
  );
}
