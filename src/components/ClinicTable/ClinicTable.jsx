import React from "react";

function ClinicTable({ clinicList }) {
  const styles = {
    width: 550
  };

  const tableBodyStyles = {
    overflow: "scroll",
    height: 650
  };

  return (
    <div style={tableBodyStyles}>
      <table className="table" style={styles}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Postal Code</th>
            <th>Type</th>
            <th>Contact Number</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {clinicList.map(clinic => (
            <tr key={clinic.id} data-testid="clinic-table-row">
              <td>{clinic.name}</td>
              <td>{clinic.address}</td>
              <td>{clinic.postal_code}</td>
              <td>{clinic.type}</td>
              <td>{clinic.tel_office}</td>
              <td>{`${clinic.results.toFixed(2)} km`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClinicTable;
