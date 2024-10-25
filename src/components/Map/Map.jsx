import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.scss";

const Map = () => {
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;

  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: "map",
      center: [-0.1276, 51.5074], // Coordinates for London
      zoom: 8,
    });

    // Add any additional map setup code here

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="map"></div>;
};

export default Map;
