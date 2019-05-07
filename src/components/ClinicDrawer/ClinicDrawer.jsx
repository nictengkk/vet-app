import React, { Component } from "react";
import { Button, Drawer } from "antd";
import Clinic from "../Clinic/Clinic";
// import Clinics from "../../services/db.json";

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
    const { data, handleClick } = this.props;
    const clinicList = data;
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
          {clinicList.map((clinic, index) => (
            <div key={index} className="card-col my-2">
              <Clinic
                handleClick={handleClick}
                key={clinic.id}
                name={clinic.name}
                type={clinic.type}
                id={clinic.id}
              />
            </div>
          ))}
        </Drawer>
      </div>
    );
  }
}

export default ClinicDrawer;
