import React, { Component } from "react";
import SimpleMap from "../MapGL/SimpleMap";
import ClinicTable from "../ClinicTable/ClinicTable";
import SortBySelect from "../SortBySelect/SortBySelect";
// import "geolib";
// import { getClinics } from "../../services/getCoordinates";
// import Clinics from "../../services/db.json";

const SORT_BY_OPTIONS = [
  { name: "Distance From Me", value: "results" },
  { name: "Clinic Name", value: "name" }
];

class ClinicListPage extends Component {
  state = {
    selectedSortBy: "name"
  };

  handleSortSelect = event => {
    const selectedOption = event.target.value;
    this.setState({ selectedSortBy: selectedOption });
  };

  sortClincs = () => {
    const { selectedSortBy } = this.state;
    const { combinedClinicList } = this.props;
    const clinicList = combinedClinicList;

    return clinicList.sort((first, second) => {
      if (first[selectedSortBy] < second[selectedSortBy]) return -1;
      if (first[selectedSortBy] > second[selectedSortBy]) return 1;
      return 0;
    });
  };

  render() {
    const { selectedSortBy } = this.state;
    const { mapInitialCenter: userAddress } = this.props;
    const { combinedClinicList: clinicList } = this.props;
    console.log(userAddress);

    const sortedClinicList = this.sortClincs();

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <SimpleMap userAddress={userAddress} clinics={clinicList} />
          </div>
          <div className="col-6">
            <SortBySelect
              options={SORT_BY_OPTIONS}
              selected={selectedSortBy}
              handleSelect={this.handleSortSelect}
            />
            <ClinicTable
              className="col-6 d-flex flex-column"
              clinicList={sortedClinicList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ClinicListPage;
