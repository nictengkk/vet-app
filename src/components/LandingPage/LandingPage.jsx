import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      this.setState({ clinicList: data.result.records });
      // data.forEach(obj => {
      //   clinicList.push(obj);
    } catch (error) {
      // console.log(data.result.records);
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const clinics = [...this.state.clinicList];
    console.log(clinics);
    //each clinic's address = clinics[0].address
    //for each clinic's address, join them and throw them into an array.
    const newClinicList = clinics.map(clinic => {
      let address = clinic.address;
      let postalCode = clinic.postal_code;
      let name = clinic.name;
      let id = clinic._id;
      const joinedAddress = address.split(" ").join("+");
      return {
        id: id,
        name: name,
        address: joinedAddress,
        postalCode: postalCode
      };
    });

    const testClinicList = newClinicList.slice(0, 5);

    console.log(this.state.userAddress);
    console.log(testClinicList[1].postalCode);

    // try {
    //   const response = await fetch(
    //     `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${
    //       this.state.userAddress
    //     }&destinations=${testClinicList[0].postalCode}&key=${
    //       process.env.REACT_APP_GOOGLE_MAP_API_KEY
    //     }`
    //     // {
    //     //   mode: "no-cors"
    //     // }
    //   );
    //   const data = await response.json();
    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  //   const distances = await Promise.all(clinicAddress.map( async (clinicAddress) => {
  //         const response = await fetch("ashsdjfhasd");
  //         const data = await response.json();
  //       const Access = data.rows[0].elements[0].
  //         const distance = Access.distance.value;
  //         const duration = Access.duration.value
  //     return {
  //         clinc: clinicAddress,
  //         distance,
  //     }
  //   }));

  //create handleSubmit to direct path, and with the updated state, use it to fire api to google to calculate distance between clinics and user location, push the results into an array, sort them and render them in ascending order.

  // const name = newArray.map(clinic=>{
  //       const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${this.state.userAddress}&destinations=${clinic.address.join("")}&key=AIzaSyCrn92nylal6OW_aMqNptFs2YsJdCdLDjo`);
  //       const data = await response.json();
  //       return data.rows.elements.distance.value
  //   })

  handleSubmit = event => {
    event.preventDefault();
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
  //https://maps.googleapis.com/maps/api/distancematrix/json?origins=28+Mimosa+Pl+Singapore+805553&destinations=24+Jalan+Kelulut&key=AIzaSyCrn92nylal6OW_aMqNptFs2YsJdCdLDjo

  //https://maps.googleapis.com/maps/api/distancematrix/json?origins=28+Mimosa+Pl+Singapore+805553&destinations=760716&key=AIzaSyCrn92nylal6OW_aMqNptFs2YsJdCdLDjo

  //create route to pass state props to ClinicList component rather than have to call api again.

  render() {
    return (
      <div className="container-fluid d-flex align-items-center">
        <form onSubmit={this.handleSubmit}>
          <h3>{"Please enter your Address or Postcode"}</h3>
          <input
            name="address"
            onChange={this.handleUserAddress}
            className="form-control mr-2"
            placeholder="Your Current Location"
            type="text"
          />
          <Link className="btn btn-outline-success mt-2" to="/clinics">
            FIND MY NEAREST VET
          </Link>
        </form>
      </div>
    );
  }
}

export default LandingPage;
