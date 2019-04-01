import React from "react";
import ReviewForm from "../ReviewForm/ReviewForm";

function Clinic(props) {
  // const styles = { width: "18rem" };

  const { data, style } = props;
  const { id } = data;
  return (
    <div className="card" style={style}>
      <div className="card-body">
        <h4 className="card-title" data-testid="restaurant-card-title">
          {data.name}
        </h4>
        <h6 className="card-subtitle mb-2 text-muted">{data.address}</h6>
      </div>

      <div className="card-footer text-muted">
        <ReviewForm id={id} reviewList={data.reviews} />
      </div>
    </div>
  );
}

export default Clinic;
