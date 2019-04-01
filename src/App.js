import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ClinicListPage from "./views/ClinicListPage/ClinicListPage";
import ClinicInfoPage from "./views/ClinicInfoPage/ClinicInfoPage";
import LandingPage from "./views/LandingPage/LandingPage";
import SignupPage from "./views/SignupPage/SignupPage";
import LoginPage from "./views/LoginPage/LoginPage";
import ClinicsAdmin from "./views/ClinicsAdmin/ClinicsAdmin";

import NavBar from "./components/NavBar/NavBar";
import ClinicForm from "./components/ClinicForm/ClinicForm";

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
    this.setState({
      userCoordinatesForMapInitalisation: { latitude, longitude }
    });
  };

  getCombinedClinicList = clinicList => {
    this.setState({ clinicList });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/admin"  component={ClinicsAdmin} />
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
              path="/clinics/new"
              render={props => <ClinicForm {...props} returnPath="/admin" />}
            />
            <Route
              path="/clinics/edit/:id/"
              render={props => <ClinicForm {...props} returnPath="/admin" />}
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
