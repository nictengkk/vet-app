import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN =
  "pk.eyJ1IjoibmljdGVuZ2trIiwiYSI6ImNqc3ZzbGd2bjBhZGkzeXFqcTBweXp6bTAifQ.kgYrCJV7DQ_wyYcZ4PA4FA";

export default class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 1.3521,
        longitude: 103.8198,
        zoom: 10,
        bearing: 0,
        pitch: 0,
        width: 800,
        height: 800
      }
    };
  }

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        onViewportChange={viewport => this.setState({ viewport: viewport })}
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}
      >
        <Marker
          latitude={1.426394}
          longitude={103.827579}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>You are here</div>
        </Marker>
      </ReactMapGL>
    );
  }
}
/*
<div className="nav" style={navStyle}>
  <NavigationControl />
</div>
*/
