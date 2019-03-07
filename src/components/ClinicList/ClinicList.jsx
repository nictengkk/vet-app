import React, { Component } from "react";
import Clinic from "../Clinic/Clinic";

class ClinicList extends Component {
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
    } catch (error) {
      console.log(error);
    }

    //
  }
  // fetchPhotos = async searchTerm => {
  //   try {
  //     const response = await fetch(
  //       `https://api.unsplash.com/search/photos?query=${searchTerm}`,
  //       {
  //         headers: {
  //           Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
  //         }
  //       }
  //     );
  //     const data = await response.json();
  //     this.setState({ imageList: data.results });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    const { clinicList } = this.state;
    return (
      <div className="container">
        {clinicList.map(clinic => (
          <div className="card-col" key={clinic._id}>
            <Clinic
              name={clinic.name}
              type={clinic.type}
              distance={clinic.distance}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ClinicList;
