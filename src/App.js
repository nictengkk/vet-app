import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ClinicListPage from "./components/ClinicListPage/ClinicListPage";
import ClinicInfoPage from "../src/components/ClinicInfoPage/ClinicInfoPage";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

class App extends Component {
  state = {
    userCoordinatesForMapInitalisation: {
      latitude: 1.3521,
      longitude: 103.8198
    },
    clinicList: []
  };

  getUserCoordinatesFromInput = (latitude, longitude) => {
    console.log("Im here", latitude, longitude);
    this.setState({
      userCoordinatesForMapInitalisation: { latitude, longitude }
    });
  };

  getCombinedClinicList = clinicList => {
    console.log("hello", clinicList);
    this.setState({ clinicList });
  };

  render() {
    console.log(
      "user coordinates ",
      this.state.userCoordinatesForMapInitalisation
    );
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route
              path="/home"
              render={props => (
                <LandingPage
                  handleCombinedClinicList={this.getCombinedClinicList}
                  handleUserCoordinates={this.getUserCoordinatesFromInput}
                  {...props}
                />
              )}
            />
            <Route
              path="/clinics/:id"
              render={props => (
                <ClinicListPage
                  {...props}
                  combinedClinicList={this.state.clinicList}
                  mapInitialCenter={
                    this.state.userCoordinatesForMapInitalisation
                  }
                />
              )}
            />
            <Route
              path="/clinics/:id"
              render={props => (
                <ClinicInfoPage
                  {...props}
                  combinedClinicList={this.state.clinicList}
                  mapInitialCenter={
                    this.state.userCoordinatesForMapInitalisation
                  }
                />
              )}
            />
            <Route
              path="/clinics"
              render={props => (
                <ClinicListPage
                  {...props}
                  combinedClinicList={this.state.clinicList}
                  mapInitialCenter={
                    this.state.userCoordinatesForMapInitalisation
                  }
                />
              )}
            />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
