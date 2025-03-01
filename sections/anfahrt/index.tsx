import ContentBox from "@/components/layout/default-box";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Anfart() {
  return (
    <ContentBox>
      <div>
        <h2>Hundefreunde Herzogenrath e.V.</h2>
        <h3>Grenzstr. 9</h3>
        <h3>52134 Herzogenrath</h3>
        Ihr findet uns direkt im unteren Bereich der Grenzstraße - Wir verfügen
        über eigene Parkplätze sowie natürlich über Sanitäre Anlagen!
      </div>
      <div className="h-[500px]">
        <GoogleMapsEmbed
          apiKey="AIzaSyBhkykJnHxtXdYdi6ZkygzHSLg5iySkKZw"
          height={500}
          width="100%"
          mode="place"
          q="Hundefreunde+Herzogenrath"
        />
      </div>
    </ContentBox>
  );
}
