import { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function DynamicMap({
  position,
  children
}: {
  position: LatLngExpression;
  children?: React.ReactNode;
}) {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        loading: () => <p>Lade Karte</p>,
        ssr: false,
      }),
    [],
  );

  return (
    <div className="h-full w-full">
      <Map position={position}>{children}</Map>
    </div>
  );
}
