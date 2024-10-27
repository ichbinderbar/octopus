import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.scss";

const Map = () => {
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;

  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: "map",
      center: [-3.1883, 55.9533], // Center on Edinburgh
      zoom: 1.5,
    });

    map.on("load", () => {
      map.flyTo({
        center: [-3.1883, 55.9533], // Zoom into Edinburgh
        zoom: 5,
        speed: 1.5,
      });
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="map"></div>;
};

export default Map;
