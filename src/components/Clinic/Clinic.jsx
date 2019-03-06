import React from "react";
// import { Link } from "react-router-dom";

function Clinic({ name, type }) {
  // const styles = { width: "18rem" };

  // const { details } = props;
  return (
    <div className="card my-3">
      {/* <img src={images} className="card-img-top img-fluid" alt="clinic" /> */}
      <div className="card-body">
        <h5 className="card-title" data-testid="restaurant-card-title">
          {name}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
      </div>

      <div className="card-footer text-muted">
        <button className="btn btn-outline-primary btn-sm mx-1">
          More Info
        </button>
      </div>
    </div>
  );
}

export default Clinic;

/* <Link className="btn btn-primary btn-sm mb-2" to="/restaurants/new">
  Create New
</Link>; */
