import React from "react";
import { Link } from "react-router-dom";

function AdminClinictable({ clinicList, handleDelete }) {
  const styles = {
    width: 550
  };

  const tableBodyStyles = {
    overflow: "scroll",
    height: 650
  };

  return (
    <div style={tableBodyStyles} className="container">
      <table className="table" style={styles}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Postal Code</th>
            <th>Contact Number</th>
            {/* <th /> */}
            <th />
          </tr>
        </thead>
        <tbody>
          {clinicList.map(clinic => (
            <tr key={clinic.id} data-testid="clinic-table-row">
              <td>{clinic.name}</td>
              <td>{clinic.address}</td>
              <td>{clinic.postal_code}</td>
              <td>{clinic.tel_office}</td>
              <td>
                {/* <Link
                  className="btn btn-primary btn-sm"
                  to={`/clinics/edit/${clinic.id}/`}
                >
                  Edit
                </Link> */}
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(clinic.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminClinictable;
