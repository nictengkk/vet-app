import React, { Component } from "react";
import { render } from "react-dom";
import MapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import ClinicPin from "./ClinicPin";
import UserPin from "./UserPin";
import ClinicInfo from "./Clinicinfo";

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
    viewport.zoom = 14;
    this.setState({ viewport });
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _renderCityMarker = (clinic, index) => {
    console.log(clinic);
    return (
      clinic.coordinate.Longitude &&
      clinic.coordinate.Latitude && (
        <Marker
          key={`marker-${index}`}
          longitude={clinic.coordinate.Longitude}
          latitude={clinic.coordinate.Latitude}
        >
          <ClinicPin
            size={10}
            onClick={() => this.setState({ popupInfo: clinic })}
          />
        </Marker>
      )
    );
  };

  _renderPosition = (longitude, latitude) => {
    // const { viewport } = this.state;
    return (
      <Marker key={`marker-center`} longitude={longitude} latitude={latitude}>
        <UserPin size={30} />
      </Marker>
    );
  };

  _displayPopup = popupInfo => {
    const { userAddress } = this.props;
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.coordinate.Longitude}
          latitude={popupInfo.coordinate.Latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <ClinicInfo info={popupInfo} userAddress={userAddress} />
        </Popup>
      )
    );
  };

  render() {
    const { viewport, popupInfo } = this.state;
    const { clinics, userAddress } = this.props;
    return (
      <MapGL
        {...viewport}
        width={"100%"}
        height={650}
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      >
        {this._renderPosition(userAddress.longitude, userAddress.latitude)}
        {clinics.length >= 1 ? clinics.map(this._renderCityMarker) : null}

        {this._displayPopup(popupInfo)}
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
