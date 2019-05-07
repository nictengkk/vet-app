import React from "react";
import { Card, CardBody, CardTitle, CardFooter, Button } from "reactstrap";

function Clinic(props) {
  const { name, id, style, handleClick } = props;
  return (
    <div style={style}>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
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
