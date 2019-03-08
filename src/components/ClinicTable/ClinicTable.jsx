import React from "react";

function ClinicTable({ clinicList }) {
  //   const sortedList = clinicsList.sort((first, second) => {
  //     if (first.name < second.name) return -1;
  //     if (first.name > second.name) return 1;
  //     return 0;
  //   });

  //   const number = () => {};

  const styles = {
    height: window.innerHeight,
    width: 550,
    overflow: "scroll"
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
            <th>Type</th>
            <th>Postal Code</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {clinicList.map(clinic => (
            <tr key={clinic._id} data-testid="clinic-table-row">
              <td>{clinic.name}</td>
              <td>{clinic.address}</td>
              <td>{clinic.type}</td>
              <td>{clinic.postal_code}</td>
              <td>{clinic.tel_office_1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClinicTable;
