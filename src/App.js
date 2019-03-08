import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ClinicListPage from "./components/ClinicListPage/ClinicListPage";
import ClinicInfoPage from "../src/components/ClinicInfoPage/ClinicInfoPage";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

class App extends Component {
  state = {
    userCoordinatesForMapInitalisation: {
      latitude: 1.3521,
      longitude: 103.8198
    }
  };
  //   viewport: {
  //     latitude: 1.3521,
  //     longitude: 103.8198,
  //     zoom: 10,
  //     bearing: 0,
  //     pitch: 0
  //   }
  // }

  //   setCurrentLocation = () => {
  //     const options = {
  //       enableHighAccuracy: true,
  //       timeout: 5000,
  //       maximumAge: 0
  //     };

  //     const success = pos => {
  //       const crd = pos.coords;
  //       const viewport = {
  //         ...this.state.viewport,
  //         longitude: crd.longitude,
  //         latitude: crd.latitude
  //       };
  //       this.setState({ viewport: viewport });
  //     };

  //     //   console.log("Your current position is:");
  //     //   console.log(`Latitude : ${crd.latitude}`);
  //     //   console.log(`Longitude: ${crd.longitude}`);
  //     //   console.log(`More or less ${crd.accuracy} meters.`);
  //     // };

  //     const error = err => {
  //       console.warn(`ERROR(${err.code}): ${err.message}`);
  //     };

  //     const position = navigator.geolocation.getCurrentPosition(loc => {
  //       console.log("results: ", loc.coords.latitude, loc.coords.longitude);
  //     });

  getUserCoordinatesFromInput = (latitude, longitude) => {
    console.log("Im here", latitude, longitude);
    this.setState({
      userCoordinatesForMapInitalisation: { latitude, longitude }
    });
  };

  render() {
    console.log(
      "user coordinates ",
      this.state.userCoordinatesForMapInitalisation
    );
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/home"
              render={props => (
                <LandingPage
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
                  mapInitialCenter={
                    this.state.userCoordinatesForMapInitalisation
                  }
                />
              )}
            />
            <Route path="/clinics/:id" component={ClinicInfoPage} />
            <Route
              path="/clinics"
              render={props => (
                <ClinicListPage
                  {...props}
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
