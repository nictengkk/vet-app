import React from "react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";
import ClinicList, { fetchClinics as mockFetchClinics } from "./ClinicList";

describe("ClinicList", () => {
  const sampleName =
    "P.A.W. (People Animal Wellness) Veterinary Centre Pte Ltd";
  const sampleType = "Clinic";

  jest.mock("./ClinicList", () => {
    const sampleResult = [
      {
        name: "P.A.W. (People Animal Wellness) Veterinary Centre Pte Ltd",
        fax_office: "62787576",
        postal_code: "90112",
        address: "112 Bukit Purmei Road #01-207",
        _id: 44,
        type: "Clinic",
        tel_office_2: "na",
        tel_office_1: "62737573"
      },
      {
        name: "Passion Veterinary Clinic Pte Ltd",
        fax_office: "66358726",
        postal_code: "730111",
        address: "111 Woodlands Street 13 #01-86",
        _id: 45,
        type: "Clinic",
        tel_office_2: "na",
        tel_office_1: "66358725"
      }
    ];

    return {
      fetchClinics: jest.fn(subject =>
        Promise.resolve({ ClinicList: sampleResult })
      )
    };
  });

  test("display a list of 2 clinics when loaded", async () => {
    const { getByText } = render(<ClinicList {...sampleResult} />);

    expect(mockFetchClinics).toHaveBeenCalledTimes(1);
  });
});
