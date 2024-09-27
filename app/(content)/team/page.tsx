import ContentBox from "@/components/layout/default-box";
import TeamMember, { Member } from "@/components/team-member";
import Age from "@/components/age";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Unser Team",
    description:
      "Unsere Trainer haben alle jahrelange Erfahrung in der Hundeerziehung und -Ausbildung und freuen sich, auf jeden neuen Vierbeiner in unseren Stunden. Selbstverständlich stehen sie auch mit Rat und Tat nach den jeweiligen Kursen zur Verfügung.",
  };
}

import imgMarianne from "@/public/team/marianne.jpg";

const marianne: Member = {
  name: "Marianne",
  img: imgMarianne,
  trainerSince: "2009-01-01",
  kurs: ["Anfänger"],
  email: "marianne@hundefreunde-herzogenrath.de",
  emailEnabled: true,
  dogs: [
    { name: "Arielle", race: "spanischer Mischling", birthDay: "2016-01-01" },
    { name: "Lui", race: "rumänischer Mischling", birthDay: "2021-06-01" },
  ],
  desc: (
    <>
      Seit über 35 Jahren begleiten mich Tierschutzhunde, die keinen guten Start
      in ihrem Leben hatten und seit 2004 bin ich bei den Hundefreunden
      Herzogenrath aktiv. Die Arbeit mit den Hunden ist für mich eine große
      Bereicherung. Für Problemhunde habe ich mich in Reiki und
      Tierkommunikation schulen lassen.
    </>
  ),
};

import imgAndrea from "@/public/team/andrea.jpg";

const andrea: Member = {
  name: "Andrea",
  img: imgAndrea,
  traineeSince: "2023-01-01",
  kurs: ["Anfänger"],
  email: "andrea@hundefreunde-herzogenrath.de",
  emailEnabled: true,
  dogs: [
    { name: "Lilly", race: "Shih-Tzu Mix", birthDay: "2024-09-01" },
    { name: "Louie", race: "Rhodesian Ridgeback", birthDay: "2021-01-01" },
  ],
  desc: (
    <>
      Seit 2022 bin ich mit meinem Welpen Louie zu den Hundefreunden gekommen
      und habe Feuer gefangen! Nachdem ich mit meinem Hund erfolgreich die BGVP
      bestanden habe, wollte ich auch einmal die andere Seite der Medaillie
      kennen lernen und möchte nun Ausbilder werden. Solltet ihr nach einer
      unserer Stunden ebenfalls Lust und Laune verspüren, so macht mir dies doch
      gerne &quot;nach&quot;.
    </>
  ),
};

import imgBirgit from "@/public/team/birgit.jpg";

const birgit: Member = {
  name: "Birgit",
  img: imgBirgit,
  trainerSince: "2022-05-01",
  kurs: ["BGVP"],
  email: "birgit@hundefreunde-herzogenrath.de",
  emailEnabled: true,
  dogs: [
    { name: "Alma", race: "Golden Retriever", birthDay: "2022-02-01" },
    { name: "Sam", race: "Golden Retriever", birthDay: "2012-09-01" },
  ],
  desc: (
    <>
      Durch unseren 1. Golden Retriever sind wir seit 2006 bei den Hundefreunden
      aktiv. Zuerst nur als Mitglied und Kursteilnehmer, dann seit 2010 als
      Kassiererin im Vorstand und nun im BGVP-Kurs auf der Wiese.
    </>
  ),
};

import imgJulia from "@/public/team/julia.jpg";

const julia: Member = {
  name: "Julia",
  img: imgJulia,
  trainerSince: "2016-11-01",
  kurs: ["Leistung"],
  email: "julia@hundefreunde-herzogenrath.de",
  emailEnabled: true,
  dogs: [
    { name: "Chilli", race: "Labrador-Weimaraner", birthDay: "2014-11-01" },
  ],
  desc: (
    <>
      2006 bin ich zu den Hundefreunden gestoßen und seit November 2016 endlich
      auch als Ausbilderin im Verein tätig. Seit Mai 2022 bin ich Mutter von
      einem kleinen Zwerg, sodass ich leider momentan nicht mehr regelmäßig
      Kurse übernehmen kann, allerdings schlägt mein Herz für den
      Leistungs-Kurs.
    </>
  ),
};

import imgPatrick from "@/public/team/patrick.jpg";

const patrick: Member = {
  name: "Patrick",
  img: imgPatrick,
  trainerSince: "2020-10-17",
  kurs: ["Leistung"],
  email: "patrick@hundefreunde-herzogenrath.de",
  emailEnabled: true,
  desc: (
    <>
      Nachdem ich mit meinem damals 10-jährigen Hund Sky zusammen die
      Hundefreunde besucht habe, sind wir irgendwie hier geblieben. Mittlerweile
      leider als einziger Ausbilder ohne Hund, dafür aber auf der anderen Seite
      des Platzes - als Trainer.
    </>
  ),
};

// -----------------------------------------------------------------------------------

const marianneJudge: Member = {
  name: "Marianne",
  img: imgMarianne,
  desc: (
    <>
      Da unsere Marianne eine der Trainer mit der meisten Erfahrung ist, steht
      sie nicht nur jede Woche auf dem Übungsplatz, sondern ist auch am Ende des
      Kurses am Richtertisch zu finden.
    </>
  ),
};

import imgHeinz from "@/public/team/heinz.jpg";

const heinzJudge: Member = {
  name: "Heinz",
  img: imgHeinz,
  desc: (
    <>
      Unser Heinz ist ein wichtiger Allrounder, daher ist er auch als Prüfer und
      im Bautrupp wieder zu finden.
    </>
  ),
};

import imgUdo from "@/public/team/udo.jpg";

const udoJudge: Member = {
  name: "Udo",
  img: imgUdo,
  desc: (
    <>
      Unser Udo komplettiert das Dreigestirn der Prüfer und ist mit das
      Urgestein am Prüfertisch. Von ihm bekommt ihr auch, solltet ihr die
      Prüfung erfolgreich bestanden haben, Urkunde, Pokal oder Anstecknadel.
    </>
  ),
};

// -----------------------------------------------------------------------------------

import imgMoni from "@/public/team/moni.jpg";

const moni: Member = {
  name: "Moni",
  img: imgMoni,
  desc: (
    <>
      Jeder Verein braucht eine gute Seele, die mit einem freundlichen Lächeln
      hinter der Theke unseren Gästen das eine oder andere kühle Getränk
      serviert und immer für einen Plausch zu haben ist. Leider ist sie derzeit
      die Einzige, die jede Woche unermütlich die Stellung hält! Solltet ihr
      euch also berufen fühlen, würde sich Moni über eine nette Kollegin oder
      Kollegen freuen.
    </>
  ),
};

// -----------------------------------------------------------------------------------

const heinzConstruction: Member = {
  name: "Heinz",
  img: imgHeinz,
  desc: (
    <>
      Nach nunmehr 24 Jahren Mitgliedschaft bin ich nicht müde den Verein in
      sämtlichen handwerklichen Belangen zu unterstützen.
    </>
  ),
};

import imgJuergen from "@/public/team/juergen.jpg";

const juergenConstruction: Member = {
  name: "Jürgen",
  subTitle: "Der Rasenmähermann",
  img: imgJuergen,
  desc: (
    <>
      Ich habe im Verein, in meiner{" "}
      <Age birthday="2019-05-01" plural="jährigen" /> Mitgliedschaft, eine
      steile Karriere hin gelegt und bin seit 2023 der 1. Vorstandsvorsitzende.
      Leider aber muss ich dennoch immer noch den Grünschnitt machen und würde
      mich deshalb über ein wenig Unterstützung freuen.
    </>
  ),
};

const udoConstruction: Member = {
  name: "Udo",
  img: imgUdo,
  desc: <></>,
};

import imgThomas from "@/public/team/thomas.jpg";

const thomasConstruction: Member = {
  name: "Thomas",
  img: imgThomas,
  desc: (
    <>
      Die haben mich hier zum Arbeiten gezwungen, dennoch komm ich gerne abends
      vorbei! Neben dem Arbeiten muss ich auch immer die Reste meiner Frau
      aufessen.
    </>
  ),
};

import imgJoerg from "@/public/team/joerg.jpg";

const joergConstruction: Member = {
  name: "Jörg",
  img: imgJoerg,
  desc: <></>,
};

import imgRalf from "@/public/team/ralf.jpg";
import Motds from "@/sections/motd";

const ralfConstruction: Member = {
  name: "Ralf",
  img: imgRalf,
  desc: <></>,
};

// -----------------------------------------------------------------------------------

const trainer: Array<Member> = [
  marianne,
  andrea,
  birgit,
  julia,
  patrick,
];

const judges: Array<Member> = [marianneJudge, heinzJudge, udoJudge];

const catering: Array<Member> = [moni];

const constructionTeam: Array<Member> = [
  heinzConstruction,
  juergenConstruction,
  udoConstruction,
  thomasConstruction,
  joergConstruction,
  ralfConstruction,
];

export default function Team() {
  return (
    <>
      <Motds />
      
      <ContentBox>
        <h2>Unsere Trainer</h2>

        <p>
          Unsere Trainer haben alle jahrelange Erfahrung in der Hundeerziehung
          und -Ausbildung und freuen sich, auf jeden neuen Vierbeiner in unseren
          Stunden. Selbstverständlich stehen sie auch mit Rat und Tat nach den
          jeweiligen Kursen zur Verfügung.
        </p>

        <p>
          Egal, ob Euer Hund vom Züchter, aus dem Tierschutz oder aus dem
          Tierheim kommt, bei unseren Trainern findet ihr stets einen
          kompetenten Ansprechpartner.
        </p>

        <p>
          Auch sind bei uns Hunde jeder Größe und Rasse herzlich willkommen!
        </p>

        <p>
          Solltet ihr vor oder nach den Stunden Fragen haben, so sprecht uns
          einfach an!
        </p>

        <div className="grid grid-cols-1 items-center justify-center gap-4 pt-4 lg:grid-cols-2">
          {trainer.map((t) => (
            <TeamMember member={t} key={t.name} />
          ))}
        </div>
      </ContentBox>

      <ContentBox>
        <h2>Unsere Prüfer</h2>

        <p>
          Auch wenn es in unseren Stunden oft spaßig zugeht, darf eine kleine
          Prüfung oder Leistungsabfrage am Ende des Kurses nicht fehlen. Dazu
          stehen neben unseren Trainern auch unsere Prüfer am Ende eines
          Semesters auf dem Rasen und entscheiden darüber, ob ihr euch in den
          nächsten Kurs wagen dürft.
        </p>

        <div className="grid grid-cols-1 items-center justify-center gap-4 pt-4 lg:grid-cols-2">
          {judges.map((t) => (
            <TeamMember member={t} key={t.name} />
          ))}
        </div>
      </ContentBox>

      <ContentBox>
        <h2>Catering</h2>

        <p>
          Da die Übungsstunden auch schon einmal etwas anstrengender sein
          können, wird im Vereinsheim für das leibliche Wohl in Form von
          Getränken und kleinen Snacks für Frauchen und Herrchen gesorgt. Die
          Einnahmen kommen hier rein dem Verein, Material und unserem Platz zu
          Gute!
        </p>

        <p>
          Auch hier suchen wir immer helfende Hände! Habt ihr also Zeit und Lust
          uns zu unterstützen, so meldet euch doch gerne beim Catering-Team!
        </p>

        <div className="grid grid-cols-1 items-center justify-center gap-4 pt-4 lg:grid-cols-2">
          {catering.map((t) => (
            <TeamMember member={t} key={t.name} />
          ))}
        </div>
      </ContentBox>

      <ContentBox>
        <h2>Der Bau-Trupp</h2>

        <p>
          Neben dem eigentlichen Trainingsbetrieb gibt es rund um den Platz
          natürlich auch immer wieder genug zu tun! Neben unserem Rasen, der
          eigentlich immer geschnitten werden muss, stehen aber auch noch andere
          Aufgaben wie Hecke schneiden, Bäume stutzen oder auch das Kehren und
          Räumen der Wege an. Nicht zuletzt aller helfenden Hände gedankt,
          strahlt unser Verein jeden Samstag in frischem Glanz!
        </p>
        <p>
          Helfende Hände werden deshalb immer gesucht und gerne gesehen! Habt
          ihr Lust und Zeit uns als Verein zu unterstützen, so sprecht uns doch
          einfach an.
        </p>

        <div className="grid grid-cols-1 items-center justify-center gap-4 pt-4 lg:grid-cols-2">
          {constructionTeam.map((t) => (
            <TeamMember member={t} key={t.name} />
          ))}
        </div>
      </ContentBox>
    </>
  );
}
