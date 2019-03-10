import React, { PureComponent } from "react";

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none"
};

export default class ClinicPin extends PureComponent {
  render() {
    const { size = 20, onClick } = this.props;

    return (
      <i
        className="fas fa-clinic-medical"
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`
        }}
        onClick={onClick}
      />
    );
  }
}
