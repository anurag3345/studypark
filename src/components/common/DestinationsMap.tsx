import WorldMap, { type CountryContext } from "react-svg-worldmap";
import { destinations } from "@/data/destinations";

const mapData = destinations.map((destination) => ({
  country: destination.isoCode,
  value: 1,
}));

/**
 * Fill logic: highlighted destination countries render in the brand orange,
 * every other country renders as a muted blue-gray so the map still reads
 * as a full world silhouette against the dark navy section behind it.
 */
function mapCountryStyle({ countryValue, color }: CountryContext): React.CSSProperties {
  const isDestination = countryValue !== undefined;
  return {
    fill: isDestination ? color : "#2A4E6E",
    stroke: "#0D2740",
    strokeWidth: 0.6,
    cursor: isDestination ? "pointer" : "default",
    transition: "fill 200ms ease",
  };
}

export function DestinationsMap() {
  return (
    <div className="mx-auto w-full max-w-2xl [&_svg]:h-auto [&_svg]:w-full">
      <WorldMap
        title="Study Park destination countries"
        size="responsive"
        color="#F5941F"
        backgroundColor="transparent"
        data={mapData}
        styleFunction={mapCountryStyle}
      />
    </div>
  );
}
