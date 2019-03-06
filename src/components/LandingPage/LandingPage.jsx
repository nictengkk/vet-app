import React, { Component } from "react";

class LandingPage extends Component {
  state = {
    clinicList: [],
    userAddress: ""
  };

  //bring in the data object with the array of objects
  //clinicList = [
  // {"name": "Allpets & Aqualife Vets Pte Ltd ",
  // fax_office: "64816990",
  // postal_code: "809041",
  // address: "24 Jalan Kelulut",
  // _id: 4,
  // type: "Clinic",
  // tel_office_2: "na",
  // tel_office_1: "64813700"},{},{}
  //];

  async componentDidMount() {
    try {
      //   call api to setstate of clinicList() => {

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

  handleUserAddress = event => {
    let userAddress = { ...this.state.userAddress };

    let userAddressJoined = event.target.value.split(" ");
    //joins the user input address for api format requirement
    let userAddressJoined2 = userAddressJoined.join("+");
    console.log(userAddressJoined2);
    // const name = newArray.map(clinic=>{
    //       const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userAddressJoined2}&destinations=${clinic.address.join("")}&key=AIzaSyCrn92nylal6OW_aMqNptFs2YsJdCdLDjo`);
    //       const data = await response.json();
    //       return data.rows.elements.distance.value
    //   })
    userAddress = event.target.value;
    this.setState({ userAddress });
  };

  //on clicking the button, the entered location will be pushed into the google distance matrix API, with
  //https://maps.googleapis.com/maps/api/distancematrix/json?origins=28+Mimosa+Pl+Singapore+805553&destinations=24+Jalan+Kelulut&key=AIzaSyCrn92nylal6OW_aMqNptFs2YsJdCdLDjo
  //it calculates distance between entered location and

  //create route to pass state props to ClinicList component rather than have to call api again.

  render() {
    const { userAddress } = this.state;
    return (
      <div className="container-fluid d-flex align-items-center">
        <form onSubmit={this.handleSubmit}>
          <input
            name="address"
            onChange={this.handleUserAddress}
            className="form-control mr-2"
            placeholder="Your Current Location"
            type="text"
          />
          <button className="btn btn-outline-success mt-2">
            FIND MY NEAREST VET
          </button>
        </form>
      </div>
    );
  }
}

export default LandingPage;
