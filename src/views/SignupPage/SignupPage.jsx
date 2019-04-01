import React, { Component } from "react";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:5555"
  : "https://backend-for-vet-app.herokuapp.com";

class SignupPage extends Component {
  state = {
    initialFormValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      imageUrl: ""
    },
    error: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      imageUrl: ""
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { history } = this.props;
    try {
      const res = await fetch(`${getUrl}/signup`, {
        method: "POST",
        body: JSON.stringify(this.state.initialFormValues),
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Something went wrong with signup, please try again");
      }
      history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.initialFormValues };
    data[input.name] = input.value;
    this.setState({ initialFormValues: data });
  };

  render() {
    // const { error } = this.state;
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      imageUrl
    } = this.state.initialFormValues;
    return (
      <div className="container">
        <h1>Sign up for an account</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
                value={firstName}
                // error={error.firstName}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
                value={lastName}
                // error={error.lastName}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                onChange={this.handleChange}
                value={username}
                // error={error.username}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={email}
                // error={error.email}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                // error={error.password}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="imageUrl">Avatar URL</label>
              <input
                name="imageUrl"
                type="text"
                className="form-control"
                id="imageUrl"
                placeholder="Image URL"
                onChange={this.handleChange}
                value={imageUrl}
                // error={error.imageUrl}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="t&cCheck"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="t&cCheck">
                I agree to the Terms and Conditions
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            // disabled={this.validate() ? true : false}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignupPage;
