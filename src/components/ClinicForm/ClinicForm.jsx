import React, { Component } from "react";
import Input from "../Input/Input";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:5555"
  : "https://backend-for-vet-app.herokuapp.com/";

export default class ClinicForm extends Component {
  state = {
    data: {
      name: "",
      address: "",
      tel_office_1: "",
      postal_code: "",
      Latitude: "",
      Longitude: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateField(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  render() {
    const {
      name,
      address,
      tel_office_1,
      postal_code,
      Latitude,
      Longitude
    } = this.state;
    return (
      <div className="container my-3">
        <div className="form-group mx-auto">
          <h3>{name ? "Edit Clinic" : "New Clinic"}</h3>
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
              name="tel_office_1"
              type="number"
              className="form-control"
              id="tel_office_1"
              placeholder="61234567"
              onChange={this.handleChange}
              value={tel_office_1}
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
