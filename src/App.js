import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import SimpleMap from "./components/SimpleMap/SimpleMap";
import ClinicList from "./components/ClinicList/ClinicList";
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
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/home" component={LandingPage} />
            <Route path="/clinics" component={ClinicList} />
            {/* <Route path="/clinics/:id" component={ClinicInfoPage} /> */}
            <Redirect from="/" to="/home" />
            <ClinicList />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
