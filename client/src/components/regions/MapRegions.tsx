import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ElevateAppBar from "../app/AppBr";
import { RegionData } from "../../interface/Eevent";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapComponent: React.FC = () => {
  const [regionsData, setRegionsData] = useState<RegionData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://testeventterror.onrender.com/api/analysis/highest-casualty-regions/"
        );
        const data = await response.json();
        const validData = data.filter(
          (item: RegionData) => item.lat && item.long
        );

        // חותך את המערך כדי להציג רק 500 מיקומים
        const limitedData = validData.slice(0, 500);
        setRegionsData(limitedData);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ElevateAppBar />
      <style>
        {`
          .leaflet-container {
            width: 100%;
            height: 100vh;  /* Change height to 100vh to cover full viewport height */
          }
          body, html, #root {
            width: 100%;
            height: 100%;
            margin: 0;  /* Ensure no margins around the map */
          }
        `}
      </style>
      <MapContainer
        center={[1.3521, 103.8198]} // סינגפור (East Asia)
        zoom={6} // זום יותר רחוק לאזור אסיה המזרחית
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {regionsData.map((region, index) => (
          <Marker key={index} position={[region.lat, region.long]} icon={icon}>
            <Popup>
              <div>
                <p><b>Region:</b> {region.region}</p>
                <p><b>Long:</b> {region.long}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default MapComponent;
