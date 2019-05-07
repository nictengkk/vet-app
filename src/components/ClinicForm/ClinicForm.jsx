import React, { Component } from "react";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:5555"
  : "https://backend-for-vet-app.herokuapp.com";

export default class ClinicForm extends Component {
  state = {
    data: {
      name: "",
      address: "",
      tel_office: "",
      postal_code: "",
      Latitude: "",
      Longitude: "",
      id: ""
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { history, match } = this.props;
    const id = match.params.id;
    if (id) {
      try {
        const res = await fetch(`${getUrl}/api/clinics/${id}`, {
          method: "PUT",
          body: JSON.stringify(this.state.data),
          headers: { "Content-Type": "application/json" },
          credentials: "include"
        });
        // const data = await res.json();
        if (res.status !== 202) {
          throw new Error("Not authorised to add clinics");
        }
        history.push("/admin");
      } catch (error) {
        alert("pls complete required fills");
        console.error(error);
      }
    } else {
      try {
        const res = await fetch(`${getUrl}/api/clinics`, {
          method: "POST",
          body: JSON.stringify(this.state.data),
          headers: { "Content-Type": "application/json" },
          credentials: "include"
        });
        // const data = await res.json();
        if (res.status !== 201) {
          throw new Error("Not authorised to add clinics");
        }
        history.push("/admin");
      } catch (error) {
        alert("access denied");
        console.error(error);
      }
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  async componentDidMount() {
    try {
      const res = await fetch(`${getUrl}/api/clinics`, {
        credentials: "include"
      });
      const clinics = await res.json();
      const paramId = this.props.match ? this.props.match.params.id : null;
      const clinicFound = clinics.filter(
        clinic => clinic.id === Number(paramId)
      );
      if (!clinicFound) return;
      const clinicEdit = clinicFound.pop();
      console.log(clinicEdit);
      this.setState({ data: clinicEdit });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {
      id,
      name,
      address,
      tel_office,
      postal_code,
      Latitude,
      Longitude
    } = this.state.data;

    return (
      <div className="container my-3">
        <div className="form-group mx-auto">
          <h3>{id ? "Edit Clinic" : "New Clinic"}</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-md-6 justify-content-center">
            <label htmlFor="name">Clinic Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Clinic Name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="tel_office">Office Tele</label>
            <input
              name="tel_office"
              type="number"
              className="form-control"
              id="tel_office"
              placeholder="61234567"
              onChange={this.handleChange}
              value={tel_office}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="address">Address</label>
            <input
              name="address"
              type="text"
              className="form-control"
              id="address"
              placeholder="Blk 123 Club Street"
              onChange={this.handleChange}
              value={address}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="postal_code">Post Code</label>
            <input
              name="postal_code"
              type="number"
              className="form-control"
              id="postal_code"
              placeholder="546123"
              onChange={this.handleChange}
              value={postal_code}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="Latitude">Clinic Latitude</label>
            <input
              name="Latitude"
              type="number"
              step="0.00001"
              className="form-control"
              id="Latitude"
              placeholder="1.2345"
              onChange={this.handleChange}
              value={Latitude}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Longitude">Clinic Longitude</label>
            <input
              name="Longitude"
              type="number"
              step="0.00001"
              className="form-control"
              id="Longitude"
              placeholder="103.123"
              onChange={this.handleChange}
              value={Longitude}
            />
          </div>
          <div className="form-group col-sm-12">
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
