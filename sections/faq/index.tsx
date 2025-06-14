import ContentBox from "@/components/layout/default-box";

const faqs = [
  {
    question: "Wie viel kostet eine Probestunde bei den Hundefreunden Herzogenrath?",
    answer: "Die Probestunde ist völlig kostenlos und unverbindlich. Kommt einfach samstags zu den Trainingszeiten vorbei und meldet euch bei einem Trainer."
  },
  {
    question: "Wann finden die Trainingsstunden statt?",
    answer: "Das Training findet ausschließlich samstags statt. Die genauen Zeiten variieren je nach Kurs - Welpen ab 13:00 Uhr, Anfänger ab 14:00 Uhr, BGVP ab 15:15 Uhr und Leistung ab 16:45 Uhr."
  },
  {
    question: "Kann ich jederzeit mit meinem Hund einsteigen?",
    answer: "Bei den Welpen- und Anfängergruppen ist ein Einstieg jederzeit möglich. Für die weiterführenden Kurse (BGVP, Leistung) ist der erfolgreiche Abschluss des jeweiligen Vorkurses erforderlich."
  },
  {
    question: "Wie lange dauern die Kurse?",
    answer: "Unsere Kurse sind auf eine Dauer von 6 Monaten ausgelegt und starten regulär im April und Oktober. Jede Übungsstunde dauert 60 Minuten."
  },
  {
    question: "Bietet ihr auch Einzelunterricht an?",
    answer: "Nein, als Verein mit ehrenamtlichen Trainern bieten wir ausschließlich Gruppentraining an. Dies fördert auch die Sozialisierung der Hunde."
  }
];

export default function FAQ() {
  return (
    <ContentBox>
        <h2>Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="border-b pb-4">
              <summary className="font-semibold text-sky-900 cursor-pointer hover:text-sky-700">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </ContentBox>
  );
}
