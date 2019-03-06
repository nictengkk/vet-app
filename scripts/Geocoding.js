// const clinicList = [];

// const fetchClinics = async () => {
//   try {
//     const response = await fetch(
//       "https://data.gov.sg/api/action/datastore_search?resource_id=b2871270-4eef-44a3-be98-908e2a73b19f"
//     );
//     const data = await response.json();
//     const array = [...data.result.records];
//     return array;
//     // data.forEach(obj => {
//     //   clinicList.push(obj);
//   } catch (error) {
//     // console.log(data.result.records);
//     console.log(error);
//   }
// };

// console.log(fetchClinics());

// const fetchCoordinates = async () => {
//   const response = await fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=REACT_APP_API_KEY`
//   );
// };

// const searchPhotos = async searchTerm => {
//   const response = await unsplash.get(`/search/photos?query=${searchTerm}`);
//   return response.data;
// };

// // export default searchPhotos;

// // data.result.record.address()

const obj = {
  destination_addresses: ["24 Jln Kelulut, Singapore 809041"],
  origin_addresses: ["28 Mimosa Pl, Singapore 805553"],
  rows: [
    {
      elements: [
        {
          distance: {
            text: "2.4 km",
            value: 2394
          },
          duration: {
            text: "7 mins",
            value: 427
          },
          status: "OK"
        }
      ]
    }
  ],
  status: "OK"
};
