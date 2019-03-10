import React, { PureComponent } from "react";

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none"
};

export default class UserPin extends PureComponent {
  render() {
    const { size = 25, onClick } = this.props;

    return (
      <i
        className="far fa-user-circle"
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`
        }}
        onClick={onClick}
      />
    );
  }
}
