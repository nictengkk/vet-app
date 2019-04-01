import React, { Component } from "react";
import { Link } from "react-router-dom";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:5555"
  : "https://backend-for-vet-app.herokuapp.com";

export default class LoginPage extends Component {
  state = {
    initialFormValues: {
      email: "",
      password: ""
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.initialFormValues };
    data[input.name] = input.value;
    this.setState({ initialFormValues: data });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`${getUrl}/login`, {
        method: "POST",
        body: JSON.stringify(this.state.initialFormValues),
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      const data = await res.json();
      const { status } = res;
      if (status === 401) {
        throw new Error("Login failed, please try again");
      }
      localStorage.setItem("user", JSON.stringify(data));
      this.props.history.push("/");
    } catch (error) {
      alert("access denied");
      console.error(error);
    }
  };

  render() {
    const { email, password } = this.state.initialFormValues;
    return (
      <div className="my-5 container">
        <div className="row d-flex flex-row justify-content-center">
          <h3>Login</h3>
        </div>
        <div className="row d-flex flex-row justify-content-center">
          <form className="px-4 py-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleDropdownFormEmail1">
                Registered Email
              </label>
              <input
                name="email"
                value={email}
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleDropdownFormPassword1">Password</label>
              <input
                name="password"
                value={password}
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <br />
            <div className="my-2">
              <Link to={"/signup"}>New around here? Sign up!</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
