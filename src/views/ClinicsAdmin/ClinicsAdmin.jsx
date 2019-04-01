import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminClinicTable from "../../components/AdminClinicTable/AdminClinicTable";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:5555"
  : "https://backend-for-vet-app.herokuapp.com/";

class ClinicsAdmin extends Component {
  state = {
    clinics: []
  };

  handleDelete = async id => {
    try {
      const { clinics } = this.state;
      const res = await fetch(`${getUrl}/api/clinics/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      if (res.status !== 202) {
        throw new Error("Not authorised to delete clinics");
      }

      const updatedClinics = clinics.filter(clinic => clinic.id !== id);
      this.setState({ clinics: updatedClinics });
    } catch (error) {
      console.error(error);
    }

  };

  async componentDidMount() {
    try {
      const res = await fetch(`${getUrl}/api/clinics`, {
        credentials: "include"
      });
      const clinics = await res.json();
      this.setState({ clinics });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { clinics } = this.state;
    return (
      <div className="container" data-testid="admin-page">
        <div className="row">
          <Link className="btn btn-primary btn-sm mb-2" to="/clinics/new">
            Create New
          </Link>
        </div>
        <div className="row">
          <AdminClinicTable
            clinicList={clinics}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default ClinicsAdmin;
