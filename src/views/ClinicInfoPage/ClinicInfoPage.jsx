import React, { Component } from "react";
import ClinicDrawer from "../../components/ClinicDrawer/ClinicDrawer";
import ClinicDetailed from "../../components/ClinicDetailed/ClinicDetailed";
import SimpleMap from "../../components/MapGL/SimpleMap";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:5555"
  : "https://backend-for-vet-app.herokuapp.com";

export class ClinicInfoPage extends Component {
  state = {
    clinic: {
      name: "",
      id: "",
      tel_office: "",
      address: "",
      postalCode: "",
      reviews: [],
      coordinate: {}
    }
  };

  styles = {
    width: "500px"
  };

  handleClick = async id => {
    try {
      const response = await fetch(`${getUrl}/api/clinics/${id}`, {
        credentials: "include"
      });
      const data = await response.json();
      console.log(data);
      const clinicID = data[0].id;
      const clinicName = data[0].name;
      const clinicAdd = data[0].address;
      const clinicPC = data[0].postal_code;
      const clinicTel = data[0].tel_office;
      const clinicReviews = data[0].reviews;
      const clinicCoordinate = data[0].coordinate;
      this.setState({
        clinic: {
          name: clinicName,
          address: clinicAdd,
          postalCode: clinicPC,
          tel_office: clinicTel,
          id: clinicID,
          reviews: clinicReviews,
          coordinate: clinicCoordinate
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    try {
      const { info } = this.props.location.state;
      const clinicID = info.id;
      const clinicName = info.name;
      const clinicAdd = info.address;
      const clinicPC = info.postal_code;
      const clinicTel = info.tel_office;
      const clinicReviews = info.reviews;
      this.setState({
        clinic: {
          name: clinicName,
          address: clinicAdd,
          postalCode: clinicPC,
          tel_office: clinicTel,
          id: clinicID,
          reviews: clinicReviews
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { combinedClinicList } = this.props;
    const { mapInitialCenter: userAddress } = this.props;
    const { clinic } = this.state;
    console.log(clinic);
    return (
      <div>
        <ClinicDrawer
          data={combinedClinicList}
          handleClick={this.handleClick}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ClinicDetailed
                className="mx-auto"
                style={this.styles}
                data={clinic}
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <SimpleMap
                userAddress={userAddress}
                clinics={combinedClinicList}
                clinic={clinic}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClinicInfoPage;
