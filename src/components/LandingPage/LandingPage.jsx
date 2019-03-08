import React, { Component } from "react";
import { getCoordinate, getCoordinates } from "../../services/getCoordinates";

class LandingPage extends Component {
  state = {
    clinicList: [],
    userAddress: {
      latitude: null,
      longtitude: null
    }
  };

  //maybe clinic data dont have to be called here. Call it in ClinicListPage and run a map on MapContainer to set a marker based on the long and lat

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://data.gov.sg/api/action/datastore_search?resource_id=b2871270-4eef-44a3-be98-908e2a73b19f"
      );

      const data = await response.json();
      const clinics = data.result.records;
      // const newClinicList = clinics.map(clinic => {
      // let address = clinic.address;
      // let postalCode = clinic.postal_code;
      // let name = clinic.name;
      // let id = clinic._id;
      // const joinedAddress = address.split(" ").join("+");
      // return {
      //   id: id,
      //   name: name,
      //   address: joinedAddress,
      //   postalCode: postalCode
      // };
      // });
      //get longtitude & latitude
      const coordinates = await getCoordinates(clinics);
      console.log("clinics", coordinates);
      this.setState({ clinicList: coordinates });
      //now join the object
    } catch (error) {
      console.log(error);
    }
  }

  // async componentDidUpdate(prevProps, prevState) {
  // this.setState({ clinicListWithCoordinates: data.results });
  // const testClinicList = newClinicList.slice(0, 5);
  // }

  //   try {
  //     const response = await fetch(
  //       `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${
  //         this.state.userAddress
  //       }&destinations=${testClinicList[0].postalCode}&key=${
  //         process.env.DM_REACT_APP_GOOGLE_MAP_API_KEY
  //       }`
  //       // {
  //       //   mode: "no-cors"
  //       // }
  //     );
  //     const data = await response.json();
  //     const Access = data.rows[0].elements[0];
  //     const distance = Access.distance.value;
  //     const duration = Access.duration.value;
  //     console.log(distance);
  //     console.log(duration);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //work on handleClick to ensure user input gets converted to Long Lat
  handleClick = async () => {
    const response = await getCoordinate(this.state.userAddress);
    console.log("user address: ", response);
    const lat = response.coordinates.Latitude;
    // console.log("user long: ", lat);
    const long = response.coordinates.Longitude;
    this.props.handleUserCoordinates(lat, long); //this method passed down from the parent takes in the arguments from the child and processes it back in the parent.
    this.props.history.push("/clinics");
  };

  handleUserAddress = event => {
    let userAddress = { ...this.state.userAddress };
    let userAddressJoined = event.target.value.split(" ");
    userAddressJoined.push("Singapore");
    //joins the user input address for api format requirement
    let userAddressJoined2 = userAddressJoined.join("+");

    userAddress = userAddressJoined2;
    this.setState({ userAddress });
  };

  //on clicking the button, the entered location will be pushed into the google distance matrix API, with
  //https://maps.googleapis.com/maps/api/distancematrix/json?origins=28+Mimosa+Pl+Singapore+805553&destinations=24+Jalan+Kelulut&key=

  //create route to pass state props to ClinicList component rather than have to call api again.

  render() {
    return (
      <div className="container-fluid d-flex align-items-center">
        <h3>{"Please enter your Address or Postcode"}</h3>
        <input
          name="address"
          onChange={this.handleUserAddress}
          className="form-control mr-2"
          placeholder="Your Current Location"
          type="text"
        />
        <button
          className="btn btn-outline-success mt-2"
          onClick={this.handleClick}
        >
          Find Your Nearest Vet
        </button>
      </div>
    );
  }
}

export default LandingPage;
