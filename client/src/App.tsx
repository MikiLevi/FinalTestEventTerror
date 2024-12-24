import "./App.css";
import ElevateAppBar from "./components/app/AppBr";
// import DisplayAttackes from "./components/attack/DisplayAttackes";
// import DisplayOrganizations from "./components/organization/DisplayOrganizations";
import MapComponent from "./components/regions/MapRegions";
import Router from "./router/router";
// import DisplayTime from "./components/time/DisplayIncidents";

function App() {
  return (
    <>
      <ElevateAppBar />
      <Router />
    </>
  );
}

export default App;
