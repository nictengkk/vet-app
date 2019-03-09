import React, { Component } from "react";
import { render } from "react-dom";
import MapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import ClinicPin from "./ClinicPin";
import ClinicInfo from "./Clinicinfo";

const TOKEN =
  "pk.eyJ1IjoibmljdGVuZ2trIiwiYSI6ImNqc3ZzbGd2bjBhZGkzeXFqcTBweXp6bTAifQ.kgYrCJV7DQ_wyYcZ4PA4FA";

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 1.3521,
        longitude: 103.8198,
        zoom: 10,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }

  componentDidMount() {
    const { userAddress } = this.props;
    const viewport = { ...this.state.viewport };
    viewport.longitude = userAddress.longitude;
    viewport.latitude = userAddress.latitude;
    viewport.zoom = 13;
    this.setState({ viewport });
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _renderCityMarker = (clinic, index) => {
    return (
      clinic.coordinates.Longitude &&
      clinic.coordinates.Latitude && (
        <Marker
          key={`marker-${index}`}
          longitude={clinic.coordinates.Longitude}
          latitude={clinic.coordinates.Latitude}
        >
          <ClinicPin
            size={20}
            onClick={() => this.setState({ popupInfo: clinic })}
          />
        </Marker>
      )
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.coordinates.Longitude}
          latitude={popupInfo.coordinates.Latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <ClinicInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;
    const { clinics } = this.props;
    return (
      <MapGL
        {...viewport}
        width={550}
        height={650}
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
        {clinics.length >= 1 ? clinics.map(this._renderCityMarker) : null}
        {this._renderPopup}
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>
      </MapGL>
    );
  }
}

export function renderToDom(container) {
  render(<App />, container);
}
