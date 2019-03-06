import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import Clinic from "./Clinic";

describe("Clinic", () => {
  test("displays name and type when rendered", () => {
    const sampleName = "Amber Veterinary Practice Pte Ltd";
    const sampleType = "Clinic";
    const sampleData = {
      name: "Amber Veterinary Practice Pte Ltd",
      fax_office: "62452334",
      postal_code: "459837",
      address: "50 Burnfoot Terrace, Frankel Estate",
      _id: 5,
      type: "Clinic",
      tel_office_2: "na",
      tel_office_1: "62455543"
    };

    const { getByText } = render(<Clinic {...sampleData} />);

    expect(getByText(sampleName)).toBeInTheDocument();
    expect(getByText(sampleType)).toBeInTheDocument();
  });
});
