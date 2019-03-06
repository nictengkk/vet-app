import React, { Component } from "react";
// import SimpleMap from "./components/SimpleMap/SimpleMap";
import ClinicList from "./components/ClinicList/ClinicList";
// import ClinicDrawer from "../src/components/ClinicDrawer/ClinicDrawer";
// import ClinicInfoPage from "../src/components/ClinicInfoPage/ClinicInfoPage";
// import Clinic from "./components/Clinic/Clinic";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LandingPage />
      </div>
    );
  }
}

export default App;
