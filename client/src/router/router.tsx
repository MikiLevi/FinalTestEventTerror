import { Route, Routes } from "react-router-dom";
import MapComponent from "../components/regions/MapRegions";
export default function router() {
  return (
    <Routes>
      <Route path="/map" element={<MapComponent />} />
    </Routes>
  );
}
