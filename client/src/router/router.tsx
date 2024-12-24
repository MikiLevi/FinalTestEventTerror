import { Route, Routes } from "react-router-dom";
import MapComponent from "../components/regions/MapRegions";
import DisplayAttackes from "../components/attack/DisplayAttackes";
import DisplayTime from "../components/time/DisplayIncidents";
import DisplayOrganizations from "../components/organization/DisplayOrganizations";
import Home from "../components/Home";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapComponent />} />
      <Route path="/attack" element={<DisplayAttackes />} />
      <Route path="/time" element={<DisplayTime />} />
      <Route path="/org" element={<DisplayOrganizations />} />
    </Routes>
  );
}
