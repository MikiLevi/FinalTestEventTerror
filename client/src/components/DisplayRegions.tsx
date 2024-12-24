import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ElevateAppBar from "./app/AppBr";

export const MyMap = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // זה יבטיח שהתוכן יסתדר בצורה של עמודה
        height: "100vh",
      }}
    >
      <ElevateAppBar />
      <div style={{ flex: 1 }}>
        {/* זה יגרום למפה להימתח לכל השטח הנותר */}
        <MapContainer
          center={[33.891813, 35.503473]}
          zoom={5}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[33.891813, 35.503473]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
