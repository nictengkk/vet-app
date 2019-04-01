import { getCoordinates } from "./getCoordinates";

let clinicList = [
  {
    address: "1 Turf Club Avenue Singapore Racecourse",
    fax_office: "68791010",
    name: "Singapore Turf Club Equine Hospital",
    postal_code: "738078",
    tel_office_1: "68791000",
    tel_office_2: "na",
    type: "Hospital",
    _id: 1
  },
  {
    address: "716 Yishun Street 71 #01-254",
    fax_office: "68533949",
    name: "AAVC - Animal & Avian Veterinary Clinic",
    postal_code: "760716",
    tel_office_1: "68539397",
    tel_office_2: "na",
    type: "Clinic",
    _id: 2
  },
  {
    address: "338 Ang Mo Kio Avenue 1 #01-1671",
    fax_office: "na",
    name: "Acacia Veterinary Clinic",
    postal_code: "560338",
    tel_office_1: "64816889",
    tel_office_2: "na",
    type: "Clinic",
    _id: 3
  },
  {
    address: "50 Burnfoot Terrace, Frankel Estate",
    fax_office: "62452334",
    name: "Amber Veterinary Practice Pte Ltd",
    postal_code: "459837",
    tel_office_1: "62455543",
    tel_office_2: "na",
    type: "Clinic",
    _id: 4
  }
];

let coordinates = [
  {
    address: {
      City: "Singapore",
      Country: "SGP",
      Label: "738078, Singapore",
      PostalCode: "738078",
      State: "Singapore"
    },
    coordinates: {
      Latitude: 1.42158,
      Longitude: 103.75798
    }
  },
  {
    address: {
      Label: "716 Yishun St 71, Singapore 760716, Singapore",
      PostalCode: "760716",
      Country: "SGP",
      County: "Singapore",
      City: "Singapore"
    },
    coordinates: { Latitude: 1.42638, Longitude: 103.82773 }
  }
];

// const getClinics = async () => {
//   try {
//     const response = await fetch(
//       "https://data.gov.sg/api/action/datastore_search?resource_id=b2871270-4eef-44a3-be98-908e2a73b19f"
//     );
//     const data = await response.json();
//     const clinics = data.result.records;
//     const coordinates = await getCoordinates(clinics);
//     // console.log(coordinates);
//     const copyClinicList = [...clinicList];
//     const combinedClinicList = copyClinicList.map(clinic => {
//       const matchPostCode = clinic.postal_code;
//       const foundCoordinates = coordinates.filter(
//         e => e.address.PostalCode === matchPostCode
//       );
//       const combinedList = Object.assign({ ...clinic }, ...foundCoordinates);
//       return combinedList;
//     });
//     return combinedClinicList;
//   } catch (err) {
//     console.log(err);
//   }
// };
