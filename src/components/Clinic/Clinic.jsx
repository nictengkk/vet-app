import React from "react";
// import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardFooter, Button } from "reactstrap";

function Clinic(props) {
  // const styles = { width: "18rem" };

  const { name, id, style, handleClick } = props;
  return (
    <div style={style}>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          {/* <CardSubtitle>{type}</CardSubtitle> */}
        </CardBody>
        <CardFooter>
          <Button
            onClick={() => {
              handleClick(id);
            }}
          >
            More Info
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Clinic;

/* <Link className="btn btn-primary btn-sm mb-2" to="/restaurants/new">
  Create New
</Link>; */

// {/* <img src={images} className="card-img-top img-fluid" alt="clinic" /> */ }
// <div className="card-body">
//   <h5 className="card-title" data-testid="restaurant-card-title">
//     {name}
//   </h5>
//   <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
// </div>

//   <div className="card-footer text-muted">
//     <Link
//       className="btn btn-outline-primary btn-sm mx-1"
//       to={`/clinics/${10}`}
//     >
//       More Info
//         </Link>
//   </div>
