import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import SortBySelect from "./SortBySelect";

test("renders a select list from options, 'Clinic Name' is selected by default", () => {
  const sortByOptions = [
    { name: "Distance From Me", value: "distance" },
    { name: "Clinic Name", value: "name" }
  ];

  const { getBySelectText, getByText, getByLabelText } = render(
    <SortBySelect
      options={sortByOptions}
      selected={"name"}
      handleSelect={() => {}}
    />
  );

  expect(getBySelectText("Clinic Name")).toBeVisible();
  expect(getByLabelText("Sort By")).toContainElement(getByText("Clinic Name"));
  expect(getByLabelText("Sort By")).toContainElement(
    getByText("Distance From Me")
  );
});
