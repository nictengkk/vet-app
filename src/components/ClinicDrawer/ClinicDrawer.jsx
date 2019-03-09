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
    //database of clinics stored locally
    // const clinics = Clinics["result"]["records"];
    //database of combined clinic list with long and latitudes
    const { data } = this.props;
    const clinicList = data;
    console.log(data);
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
          {clinicList.map(clinic => (
            <div className="card-col">
              <Clinic key={clinic._id} name={clinic.name} type={clinic.type} />
            </div>
          ))}
        </Drawer>
      </div>
    );
  }
}

export default ClinicDrawer;
