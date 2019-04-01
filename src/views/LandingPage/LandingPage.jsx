import React, { Component } from "react";
import { getCoordinate, getCoordinates } from "../../utils/getCoordinates";
import { getDistance, combineData } from "../../utils/distanceMatrix";
import "./LandingPage.css";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:5555"
  : "https://backend-for-vet-app.herokuapp.com";

class LandingPage extends Component {
  state = {
    clinicList: [],
    userAddress: ""
  };

  async componentDidMount() {
    try {
      const response = await fetch(`${getUrl}/api/clinics`, {
        credentials: "include"
      });
      const data = await response.json();
      this.setState({ clinicList: data });
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const results = await getDistance(
      this.state.userAddress,
      this.state.clinicList
    );
    const newCombinedList = combineData(this.state.clinicList, results);
    const response = await getCoordinate(this.state.userAddress);
    const lat = response.coordinates.Latitude;
    const long = response.coordinates.Longitude;
    this.props.handleUserCoordinates(lat, long); //this method passed down from the parent takes in the arguments from the child and processes it back in the parent.
    this.props.handleCombinedClinicList(newCombinedList);
    this.props.history.push("/clinics");
  };

  handleUserAddress = event => {
    let userAddress = { ...this.state.userAddress };
    let userAddressJoined = event.target.value.split(" ");
    userAddressJoined.push("Singapore");
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
