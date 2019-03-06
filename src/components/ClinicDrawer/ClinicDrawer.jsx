import React, { Component } from "react";
import { Button, Drawer } from "antd";
import Card from "../Card/Card";

class ClinicDrawer extends Component {
  state = { visible: true, placement: "left" };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Clinics in the North"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {/* {clinics.map(clinic => {
            <Card />;
          })} */}
          <p>Clinic A</p>
        </Drawer>
      </div>
    );
  }
}

export default ClinicDrawer;
