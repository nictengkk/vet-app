import React from "react";

const SortBySelect = props => {
  const { options, selected, handleSelect } = props;
  return (
    <div>
      <label htmlFor="sort-by-select">Sort By</label>
      <select
        value={selected}
        onChange={handleSelect}
        id="sort-by-select"
        data-testid="sort-by-select"
        className="btn btn-primary dropdown-toggle mx-2"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBySelect;
