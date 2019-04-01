import React, { Component } from "react";
import ClinicDrawer from "../../components/ClinicDrawer/ClinicDrawer";
import ClinicDetailed from "../../components/ClinicDetailed/ClinicDetailed";
import SimpleMap from "../../components/MapGL/SimpleMap";

export class ClinicInfoPage extends Component {
  state = {
    clinic: {
      name: "",
      id: "",
      tel_office: "",
      address: "",
      postalCode: "",
      reviews: []
    }
  };

  styles = {
    width: "500px"
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
    return (
      <div>
        <ClinicDrawer data={combinedClinicList} />
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
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClinicInfoPage;
