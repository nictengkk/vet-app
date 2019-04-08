import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


export class MapContainer extends Component {
  state = {
    selectedPlace: {},
    showingInfoWindow: true,
    activeMarker: {},
    initialCenter: {
      lat: 1.3521,
      lng: 103.8198
    }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { initialCenter } = this.state;
    const style = {
      width: "100%",
      height: "100%"
    };

    return (
      <div>
        <Map
          onClick={this.onMapClicked}
          google={this.props.google}
          style={style}
          zoom={14}
          initialCenter={initialCenter}
        >
          <Marker name={"userAddress"} onClick={this.onMarkerClick} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);
