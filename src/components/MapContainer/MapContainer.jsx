import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  GoogleApiComponent,
  Marker,
  InfoWindow
} from "google-maps-react";
import ReactDOM from "react-dom";

//import Map from "google-maps-react"

export class MapContainer extends Component {
  state = {
    userAddress: "",
    selectedPlace: { name: "" }
  };

  componentDidMount() {}

  render() {
    const style = {
      width: "100vw",
      height: "100vh"
    };

    const { google } = this.props;
    console.log(google.map);
    const origin1 = new google.maps.LatLng(1.426131, 103.82745);
    const origin2 = "760716 Singapore";
    const destinationA = "312079 Singapore";
    const destinationB = new google.maps.LatLng(1.334342, 103.848249);
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
      <div style={style}>
        <Map
          google={google}
          initialCenter={{ lat: 1.426131, lng: 103.82745 }}
          zoom={14}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <Marker
            name={"Vet Clinic"}
            position={{ lat: 1.426131, lng: -103.82745 }}
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
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

// export class MapContainer extends Component {
//   // state = { selectedPlace: { name: "" } };

//   render() {
//     const style = {
//       width: "100vw",
//       height: "100vh"
//     };

//     return (
//       <div style={style}>
//         <Map google={this.props.google} />
//       </div>
//     );
//   }
// }

// export default GoogleApiComponent({
//   apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
// })(MapContainer);
