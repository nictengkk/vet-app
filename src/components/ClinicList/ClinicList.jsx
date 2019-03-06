import React, { Component } from "react";
import Clinic from "../Clinic/Clinic";

class ClinicList extends Component {
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
            <Clinic name={clinic.name} type={clinic.type} />
          </div>
        ))}
      </div>
    );
  }
}

export default ClinicList;
