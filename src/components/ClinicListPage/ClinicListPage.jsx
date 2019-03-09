import React, { Component } from "react";
import SimpleMap from "../MapContainer/SimpleMap";
import ClinicTable from "../ClinicTable/ClinicTable";
import SortBySelect from "../SortBySelect/SortBySelect";
// import { getClinics } from "../../services/getCoordinates";
// import Clinics from "../../services/db.json";

class ClinicListPage extends Component {
  state = {
    clinicList: [],
    userAddress: {
      latitude: null,
      longitude: null
    },
    sortByOptions: [
      { name: "Distance From Me", value: "distance" },
      { name: "Clinic Name", value: "name" }
    ],
    selectedSortBy: "name"
  };

  componentDidMount() {
    // console.log("clinic list passed down from App: ", clinicList);
    const { mapInitialCenter } = this.props;
    const { combinedClinicList } = this.props;
    const currentLocation = mapInitialCenter;
    const clinicList = combinedClinicList;

    this.setState({ clinicList: clinicList, userAddress: currentLocation });
  }

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
    const {
      clinicList,
      sortByOptions,
      selectedSortBy,
      userAddress
    } = this.state;

    const sortedClinicList = this.sortClincs();

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <SimpleMap userAddress={userAddress} clinics={clinicList} />
          </div>
          <div className="col-6">
            <SortBySelect
              options={sortByOptions}
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
