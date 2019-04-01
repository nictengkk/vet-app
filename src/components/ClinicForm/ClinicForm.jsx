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
    const { history } = this.props;
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
      console.error(error);
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
      const id = this.props.match ? this.props.match.params.id : null;
      const clinicFound = clinics.find(clinic => clinic.id === id);
      if (!clinicFound) return;
      this.setState({ data: clinicFound });
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
    } = this.state;
    return (
      <div className="container my-3">
        <div className="form-group mx-auto">
          <h3>{id ? "Edit Clinic" : "New Clinic"}</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          {/* <div className="form-row"> */}
          <div className="form-group col-md-6 justify-content-center">
            <label htmlFor="firstName">Clinic Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Clinic Name"
              onChange={this.handleChange}
              value={name}
              // error={error.firstName}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Office Tele</label>
            <input
              name="tel_office"
              type="number"
              className="form-control"
              id="tel_office"
              placeholder="61234567"
              onChange={this.handleChange}
              value={tel_office}
              // error={error.lastName}
            />
          </div>
          {/* </div> */}
          {/* <div className="form-row"> */}
          <div className="form-group col-md-6">
            <label htmlFor="username">Address</label>
            <input
              name="address"
              type="text"
              className="form-control"
              id="address"
              placeholder="Blk 123 Club Street"
              onChange={this.handleChange}
              value={address}
              // error={error.username}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Post Code</label>
            <input
              name="postal_code"
              type="number"
              className="form-control"
              id="postal_code"
              placeholder="546123"
              onChange={this.handleChange}
              value={postal_code}
              // error={error.email}
            />
          </div>
          {/* </div> */}
          {/* <div className="form-row"> */}
          <div className="form-group col-md-6">
            <label htmlFor="password">Clinic Latitude</label>
            <input
              name="Latitude"
              type="number"
              step="0.00001"
              className="form-control"
              id="Latitude"
              placeholder="1.2345"
              onChange={this.handleChange}
              value={Latitude}
              // error={error.password}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="imageUrl">Clinic Longitude</label>
            <input
              name="Longitude"
              type="number"
              step="0.00001"
              className="form-control"
              id="Longitude"
              placeholder="103.123"
              onChange={this.handleChange}
              value={Longitude}
              // error={error.imageUrl}
            />
          </div>
          <div className="form-group col-sm-12">
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
                // disabled={this.validate() ? true : false}
              >
                Submit
              </button>
            </div>
            {/* </div> */}
          </div>
        </form>
      </div>
    );
  }
}
