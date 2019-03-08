import React, { Component } from "react";
import SimpleMap from "../MapContainer/SimpleMap";
import ClinicTable from "../ClinicTable/ClinicTable";
import SortBySelect from "../SortBySelect/SortBySelect";
// import { getClinics } from "../../services/getCoordinates";
import Clinics from "../../services/db.json";

class ClinicListPage extends Component {
  state = {
    clinicList: [],
    userAddress: {
      latitude: null,
      longitude: null
    },
    sortByOptions: [
      { name: "Distance From Me", value: "distance" },
      { name: "Clinic Name", value: "name" }
    ],
    selectedSortBy: "name"
  };

  // setCurrentLocation = () => {
  //   const options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0
  //   };

  //   const success = pos => {
  //     const crd = pos.coords;
  //     const viewport = {
  //       ...this.state.viewport,
  //       longitude: crd.longitude,
  //       latitude: crd.latitude
  //     };
  //     this.setState({ viewport: viewport });
  //   };

  //   //   console.log("Your current position is:");
  //   //   console.log(`Latitude : ${crd.latitude}`);
  //   //   console.log(`Longitude: ${crd.longitude}`);
  //   //   console.log(`More or less ${crd.accuracy} meters.`);
  //   // };

  //   const error = err => {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   };

  //   const position = navigator.geolocation.getCurrentPosition(loc => {
  //     console.log("results: ", loc.coords.latitude, loc.coords.longitude);
  //   });
  //   // success,
  //   // error,
  //   // options

  //   console.log("current position: ", position);
  //   console.log(navigator);
  // };

  async componentDidMount() {
    const { mapInitialCenter } = this.props;
    const clinics = Clinics["result"]["records"];
    const currentLocation = mapInitialCenter;

    this.setState({ clinicList: clinics, userAddress: currentLocation });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.props.userAddress.longitude === prevProps.userAddress.longitude &&
  //     this.props.userAddress.latitude === prevProps.userAddress.latitude
  //   ) {
  //     return;
  //   }
  //   const { userAddress } = this.props;
  //   console.log(userAddress);
  // const viewport = { ...this.state.viewport };
  // viewport.longitude = userAddress.longitude;
  // viewport.latitude = userAddress.latitude;
  //   viewport.zoom = 16;
  //   console.log("component updating", viewport);
  //   this.setState({ viewport: viewport });
  // }

  handleSortSelect = event => {
    const selectedOption = event.target.value;
    this.setState({ selectedSortBy: selectedOption });
  };

  sortClincs = () => {
    const { clinicList, selectedSortBy } = this.state;

    return clinicList.sort((first, second) => {
      if (first[selectedSortBy] < second[selectedSortBy]) return -1;
      if (first[selectedSortBy] > second[selectedSortBy]) return 1;
      return 0;
    });
  };

  render() {
    const {
      clinicList,
      sortByOptions,
      selectedSortBy,
      userAddress
    } = this.state;

    console.log(this.state.userAddress);

    const sortedClinicList = this.sortClincs();

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <SimpleMap userAddress={userAddress} clinics={clinicList} />
          </div>
          <div className="col-6">
            <SortBySelect
              options={sortByOptions}
              selected={selectedSortBy}
              handleSelect={this.handleSortSelect}
            />
            <ClinicTable
              className="col-6 d-flex flex-column"
              clinicList={sortedClinicList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ClinicListPage;

//pass user lat and long to Map via props
