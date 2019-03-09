import React, { Component } from "react";
import ClinicDrawer from "../ClinicDrawer/ClinicDrawer";

export class ClinicInfoPage extends Component {
  render() {
    const { combinedClinicList } = this.props;

    return (
      <div>
        <ClinicDrawer data={combinedClinicList} />
      </div>
    );
  }
}

export default ClinicInfoPage;
