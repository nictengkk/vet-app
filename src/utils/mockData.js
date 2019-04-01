import { getClinics } from "./getCoordinates";

// let distanceMatrix = [
//   { id: 1, distance: 1670 },
//   { id: 2, distance: 3543 },
//   { id: 3, distance: 6381 },
//   { id: 4, distance: 612 }
// ];

let coordinate = [
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
  }
];

let clinicList = [
  {
    address: "1 Turf Club Avenue Singapore Racecourse",
    fax_office: "68791010",
    name: "Singapore Turf Club Equine Hospital",
    postal_code: "738078",
    tel_office_1: "68791000",
    tel_office_2: "na",
    type: "Hospital",
    _id: 1,
    longitude: 103.7636,
    latitude: 1.422209
  },
  {
    address: "716 Yishun Street 71 #01-254",
    fax_office: "68533949",
    name: "AAVC - Animal & Avian Veterinary Clinic",
    postal_code: "760716",
    tel_office_1: "68539397",
    tel_office_2: "na",
    type: "Clinic",
    _id: 2,
    longitude: 103.82745,
    latitude: 1.426131
  },
  {
    address: "338 Ang Mo Kio Avenue 1 #01-1671",
    fax_office: "na",
    name: "Acacia Veterinary Clinic",
    postal_code: "560338",
    tel_office_1: "64816889",
    tel_office_2: "na",
    type: "Clinic",
    _id: 3,
    longitude: 103.8487619,
    latitude: 1.363639
  },
  {
    address: "50 Burnfoot Terrace, Frankel Estate",
    fax_office: "62452334",
    name: "Amber Veterinary Practice Pte Ltd",
    postal_code: "459837",
    tel_office_1: "62455543",
    tel_office_2: "na",
    type: "Clinic",
    _id: 4,
    longitude: 103.922759,
    latitude: 1.312738
  }
];

//manipulate incoming JSON data from distance matrix api to look like distanceMatrix

//for each clinic in the copyClinicList array, match clinic._id to each object.id in the distanceMatrix array, and if they match, spread open clinic and insert the distance key and value property into the clinic object

let copyClinicList = [...clinicList];
const newClinicList = copyClinicList.map(clinic => {
  const matchID = clinic._id;
  const foundMatrix = distanceMatrix.filter(e => e.id === matchID);
  const newClinic = Object.assign({ ...clinic }, ...foundMatrix);
  return newClinic;
});

//sort clinics in ascending order
const sortedListByDist = arr => {
  return arr.sort((first, second) => {
    if (first.distance < second.distance) return -1;
    if (first.distance > second.distance) return 1;
    return 0;
  });
};

// console.log(sortedListByDist(newClinicList));

export function getClinics() {
  return clinicList;
}
