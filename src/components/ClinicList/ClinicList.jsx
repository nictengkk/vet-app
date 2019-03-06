// import React from "react";

// function Clinic(props) {
//   const { details } = props;
//   return (
//     <div className="card my-3">
//       <img
//         src={details.imageUrl}
//         className="card-img-top img-fluid"
//         alt="clinic"
//       />
//       <div className="card-body">
//         <h5 className="card-title" data-testid="restaurant-card-title">
//           {details.name}
//         </h5>
//         <h6 className="card-subtitle mb-2 text-muted">
//           {details.type.name}
//         </h6>
//         <h6 className="card-subtitle text-muted">
//           {" "}
//           {details.openingTime} - {details.closingTime} <br />
//           Avg Price: ${details.averagePrice}
//         </h6>
//       </div>

//       <div className="card-footer text-muted">
//         <button className="btn btn-primary btn-sm mx-1">More Info</button>
//       </div>
//     </div>
//   );
// }

// export default Clinic;

import React, { Component } from "react";
import Card from "../Card/Card";

class ClinicList extends Component {
  state = {
    imageList: []
  };

  fetchPhotos = async searchTerm => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
          }
        }
      );
      const data = await response.json();
      this.setState({ imageList: data.results });
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    console.log("Component mounting");
    await this.fetchPhotos("pets");
  }

  render() {
    const { imageList } = this.state;
    console.log(imageList);
    return (
      <div className="container">
        {imageList.map(result => (
          <Card
            key={result.id}
            imageUrl={result.urls.small}
            title={result.description}
          />
        ))}
      </div>
    );
  }
}

export default ClinicList;
