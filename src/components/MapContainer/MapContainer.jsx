import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

export class MapContainer extends Component {
  state = { selectedPlace: { name: "" } };

  render() {
    const { google } = this.props;
    console.log(google.map);
    const origin1 = new google.maps.LatLng(55.930385, -3.118425);
    const origin2 = "Greenwich, England";
    const destinationA = "Stockholm, Sweden";
    const destinationB = new google.maps.LatLng(50.087692, 14.42115);
    const distanceMatrixRequest = {
      origins: [origin1, origin2],
      destinations: [destinationA, destinationB],
      travelMode: "DRIVING"
    };
    const callback = (response, status) => {
      if (status === "OK") {
        const origins = response.originAddresses;
        // const destinations = response.destinationAddresses;
        console.log(response);
        for (let i = 0; i < origins.length; i++) {
          const results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            // var element = results[j];
            // var distance = element.distance.text;
            // var duration = element.duration.text;
            // var from = origins[i];
            // var to = destinations[j];
          }
        }
      }
    };

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(distanceMatrixRequest, callback);

    return (
      <Map google={google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);
