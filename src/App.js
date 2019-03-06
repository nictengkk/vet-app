import React, { Component } from "react";
import SimpleMap from "./components/SimpleMap/SimpleMap";
import ClinicList from "./components/ClinicList/ClinicList";
import ClinicDrawer from "../src/components/ClinicDrawer/ClinicDrawer";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div className="container d-flex">
        <div className="row">
          <div className="col-6">
            <ClinicDrawer />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <SimpleMap />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
