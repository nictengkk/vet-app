import React, { Component } from "react";
import SimpleMap from "../MapGL/SimpleMap";
import ClinicTable from "../ClinicTable/ClinicTable";
import SortBySelect from "../SortBySelect/SortBySelect";

const SORT_BY_OPTIONS = [
  { name: "Distance From Me", value: "results" },
  { name: "Clinic Name", value: "name" }
];

class ClinicListPage extends Component {
  state = {
    selectedSortBy: "results",
    filterBy: ""
  };

  handleSortSelect = event => {
    const selectedOption = event.target.value;
    this.setState({ selectedSortBy: selectedOption });
  };

  handleFilter = event => {
    const filterOption = event.target.value;
    this.setState({ filterBy: filterOption });
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
    // console.log(userAddress);

    // const filterList = list => {
    //   if (filterBy) {
    //     return list.filter(listItem => {
    //       listItem.name.startsWith(filterBy);
    //     });
    //   }
    //   return list;
    // };

    const sortedClinicList = this.sortClincs();
    // const filteredSortedList = filterList(sortedClinicList);
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
            <label>Filter by: </label>
            <input
              name="name"
              className="form-control mb-2"
              onChange={this.handleFilter}
              type="text"
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
