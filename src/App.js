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
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/home" component={LandingPage} />
            <Route
              path="/clinics/:long/:lat"
              render={props => <ClinicListPage {...props} />}
            />
            <Route path="/clinics/:id" component={ClinicInfoPage} />
            <Route path="/clinics" component={ClinicListPage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
