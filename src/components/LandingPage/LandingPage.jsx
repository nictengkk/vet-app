import React, { Component } from "react";
import { getCoordinate, getCoordinates } from "../../services/getCoordinates";
import { getDistance, combineData } from "../../services/distanceMatrix";
import "./LandingPage.css";
class LandingPage extends Component {
  state = {
    clinicList: [],
    userAddress: ""
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://data.gov.sg/api/action/datastore_search?resource_id=b2871270-4eef-44a3-be98-908e2a73b19f"
      );
      const data = await response.json();
      const clinics = data.result.records;
      const coordinates = await getCoordinates(clinics);
      const copyClinicList = [...clinics];
      const combinedClinicList = copyClinicList.map(clinic => {
        const matchPostCode = clinic.postal_code;
        const foundCoordinates = coordinates.filter(
          e => e.address.PostalCode === matchPostCode
        );
        const combinedList = Object.assign({ ...clinic }, ...foundCoordinates);

        return combinedList;
      });

      const filteredCombinedClinicList = combinedClinicList.filter(
        clinic => !!clinic.coordinates
      );
      // console.log(filteredCombinedClinicList);
      this.setState({ clinicList: filteredCombinedClinicList });
    } catch (error) {
      console.log(error);
    }
  }

  //push loader insde handle submit, to push the page into the loading component?
  handleSubmit = async event => {
    event.preventDefault();
    const results = await getDistance(
      this.state.userAddress,
      this.state.clinicList
    );
    const newCombinedList = combineData(this.state.clinicList, results);
    // console.log(newCombinedList);
    const response = await getCoordinate(this.state.userAddress);
    const lat = response.coordinates.Latitude;
    const long = response.coordinates.Longitude;
    this.props.handleUserCoordinates(lat, long); //this method passed down from the parent takes in the arguments from the child and processes it back in the parent.
    this.props.handleCombinedClinicList(newCombinedList);
    this.props.history.push("/clinics");
  };

  handleUserAddress = event => {
    // this.getDistance();
    let userAddress = { ...this.state.userAddress };
    let userAddressJoined = event.target.value.split(" ");
    userAddressJoined.push("Singapore");
    //joins the user input address for api format requirement
    let userAddressJoined2 = userAddressJoined.join("+");

    userAddress = userAddressJoined2;
    this.setState({ userAddress });
  };

  render() {
    return (
      <div className="bg container-fluid d-flex align-items-center justify-content-center">
        <div className="transparent-input">
          <form onSubmit={this.handleSubmit}>
            <input
              name="address"
              onChange={this.handleUserAddress}
              className="form-control mr-2"
              placeholder="Your Current Location"
              type="text"
            />
            <button
              type="submit"
              className="btn btn-lg btn-outline-success mt-2"
            >
              Find Your Nearest Vet
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LandingPage;
