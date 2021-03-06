import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class ClinicInfo extends PureComponent {
  render() {
    const { info, userAddress } = this.props;
    const currentLocation = `${userAddress.latitude},${userAddress.longitude}`;
    const displayName = `${info.name}`;
    const id = `${info.id}`;
    const postCode = `${info.address.PostalCode}`;

    const clinicDetail = {
      pathname: `/clinics/${id}`,
      state: { info: info }
    };

    return (
      <div>
        <div>
          {displayName} | {""}
          <a
            target="_new"
            href={`https://www.google.com/maps/dir/?api=1&origin=${currentLocation}&destination=Singapore+${postCode}`}
            rel="noopener noreferrer"
          >
            Directions
          </a>
          {""} | {""}
          <Link to={clinicDetail}>More Info</Link>
        </div>
      </div>
    );
  }
}

// `https://www.google.com/maps/dir/Current+Location/Singapore+${postCode}
// https://www.google.es/maps/dir/'52.51758801683297,13.397978515625027'/'52.49083837044266,13.369826049804715'

// https://www.google.com/maps/dir/?api=1&origin="${currentLocation}"&destination=Singapore+${postCode}
