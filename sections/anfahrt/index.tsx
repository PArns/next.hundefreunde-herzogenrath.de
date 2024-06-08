import ContentBox from "@/components/layout/default-box";
import DynamicMap from "@/components/map/dynamic-map";

export default function Anfart() {
  return (
    <ContentBox>
      <div>
        <h2>Hundefreunde Herzogenrath e.V.</h2>
        <h3>Grenzstr. 9</h3>
        <h3 className="pb-2">52134 Herzogenrath</h3>
        Ihr findet uns direkt im unteren Bereich der Grenzstraße - Wir verfügen
        über eigene Parkplätze sowie natürlich über Sanitäre Anlagen!
      </div>
      <div className="h-[500px]">
        <DynamicMap position={[50.880173, 6.087774]}>
          <b>Hundefreunde Herzogenrath e.V.</b>
          <br />
          Grenzstr. 9 - 52134 Herzogenrath
        </DynamicMap>
      </div>
    </ContentBox>
  );
}
