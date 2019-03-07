import React, { Component } from "react";
import { Button, Drawer } from "antd";
// import Clinic from "../Clinic/Clinic";

class ClinicDrawer extends Component {
  state = { visible: false, placement: "left" };

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
          title="Clinics"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {/* {clinics.map(clinic => {
            <Clinic />;
          })} */}
          <p>Clinic A</p>
        </Drawer>
      </div>
    );
  }
}

export default ClinicDrawer;
