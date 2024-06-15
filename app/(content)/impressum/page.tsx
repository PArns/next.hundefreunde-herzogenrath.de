import ContentBox from "@/components/layout/default-box";

export function generateMetadata() {
  return {
    title: "Impressum",
    description: "Unsere Adresse, Rechtliches und mehr",
  };
}

export default function Impressum() {
  return (
    <ContentBox>
      <h2>Hundefreunde Herzogenrath e.V.</h2>
      <p>Vereinsregister Aachen VR 3387</p>
      <h3 className="pt-4">Übungsgelände:</h3>
      Grenzstraße
      <br />
      52134 Herzogenrath
      <h3 className="pt-4">Kontakt:</h3>
      Jürgen Essler
      <br />
      Lid. van Deysselstraat 43
      <br />
      NL 6464cv Kerkrade
      <br />
      <br />
      E-Mail: info@hundefreunde-herzogenrath.de
      <br />
      Internet: https://www.hundefreunde-herzogenrath.de
      <h3 className="pt-4">Verantwortlich für den Inhalt:</h3>
      <p>Hundefreunde Herzogenrath e.V. – Der Vorstand</p>
      <h3 className="pt-4">Pflege &amp; technische Betreuung:</h3>
      <p>Patrick Arns</p>
      <h3 className="pt-4">Bildmaterial:</h3>
      <p>
        Patrick Arns –{" "}
        <a
          href="https://patrick-arns.de"
          target="_blank"
          className="text-sky-600"
        >
          https://patrick-arns.de
        </a>
        <br />
        Marcelo Rabelo – &nbsp;
        <a
          href="https://www.seumelhorclick.com.br"
          target="_blank"
          className="text-sky-600"
        >
          https://www.seumelhorclick.com.br
        </a>
      </p>
      <h3 className="pt-4">Disclaimer:</h3>
      <p>
        <strong>1. Haftungsbeschränkung</strong>
        <br />
        Die Inhalte des Internetauftritts wurden mit größtmöglicher Sorgfalt und
        nach bestem Gewissen erstellt. Dennoch übernimmt der Anbieter dieser
        Webseite keine Gewähr für die Aktualität, Vollständigkeit und
        Richtigkeit der bereitgestellten Seiten und Inhalte.
      </p>
      <p>
        Als Diensteanbieter ist der Anbieter dieser Webseite gemäß § 7 Abs. 1
        TMG für eigene Inhalte und bereitgestellte Informationen auf diesen
        Seiten nach den allgemeinen Gesetzen verantwortlich; nach den §§ 8 bis
        10 TMG jedoch nicht verpflichtet, die übermittelten oder gespeicherten
        fremden Informationen zu überwachen. Eine Entfernung oder Sperrung
        dieser Inhalte erfolgt umgehend ab dem Zeitpunkt der Kenntnis einer
        konkreten Rechtsverletzung. Eine Haftung ist erst ab dem Zeitpunkt der
        Kenntniserlangung möglich.
      </p>
      <p className="pt-2">
        <strong>2. Externe Links</strong>
        <br />
        Die Webseite enthält sog. „externe Links“ (Verlinkungen) zu anderen
        Webseiten, auf deren Inhalt der Anbieter der Webseite keinen Einfluss
        hat. Aus diesem Grund kann der Anbieter für diese Inhalte auch keine
        Gewähr übernehmen.
        <br />
        Für die Inhalte und Richtigkeit der bereitgestellten Informationen ist
        der jeweilige Anbieter der verlinkten Webseite verantwortlich. Zum
        Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei
        Bekanntwerden einer solchen Rechtsverletzung wird der Link umgehend
        entfernen.
      </p>
      <p className="pt-2">
        <strong>3. Urheberrecht/Leistungsschutzrecht</strong>
        <br />
        Die auf dieser Webseite veröffentlichten Inhalte, Werke und
        bereitgestellten Informationen unterliegen dem deutschen Urheberrecht
        und Leistungsschutzrecht. Jede Art der Vervielfältigung, Bearbeitung,
        Verbreitung, Einspeicherung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung
        des jeweiligen Rechteinhabers. Das unerlaubte Kopieren/Speichern der
        bereitgestellten Informationen auf diesen Webseiten ist nicht gestattet
        und strafbar.
      </p>
      <p className="pt-2">
        <strong>4. Datenschutz</strong>
        <br />
        Durch den Besuch des Internetauftritts können Informationen (Datum,
        Uhrzeit, aufgerufene Seite) über den Zugriff auf dem Server gespeichert
        werden. Es werden keine personenbezogenenen (z. B. Name, Anschrift oder
        E-Mail-Adresse) Daten, gespeichert.
      </p>
      <p>
        Sofern personenbezogene Daten erhoben werden, erfolgt dies, sofern
        möglich, nur mit dem vorherigen Einverständnis des Nutzers der Webseite.
        Eine Weitergabe der Daten an Dritte findet ohne ausdrückliche Zustimmung
        des Nutzers nicht statt.
      </p>
      <p>
        Der Anbieter weist darauf hin, dass die Übertragung von Daten im
        Internet (z. B. per E-Mail) Sicherheitslücken aufweisen und ein
        lückenloser Schutz der Daten vor dem Zugriff Dritter nicht gewährleistet
        werden kann. Der Anbieter übernimmt keine Haftung für die durch solche
        Sicherheitslücken entstandenen Schäden.
      </p>
      <p>
        Der Verwendung der Kontaktdaten durch Dritte zur gewerblichen Nutzung
        wird ausdrücklich widersprochen. Es sei denn, der Anbieter hat zuvor
        seine schriftliche Einwilligung erteilt.
        <br />
        Der Anbieter behält sich rechtliche Schritte für den Fall der
        unverlangten Zusendung von Werbeinformationen, z. B. durch Spam-Mails,
        vor.
      </p>
    </ContentBox>
  );
}
