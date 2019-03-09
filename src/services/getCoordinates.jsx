export const transformData = response => {
  const results = response.Response.View;
  const coordinate = results[0];
  const loc = coordinate.Result[0].Location;
  return {
    coordinates: loc.DisplayPosition,
    address: loc.Address
  };
};

export const getCoordinates = async list => {
  return await Promise.all(
    list.map(async clinic => {
      try {
        const response = await fetch(
          `https://geocoder.api.here.com/6.2/geocode.json?app_id=kx4YbvbQsa7oF2WwH9su&app_code=HdQS63p-e0B3Q30KOCjFdw&searchtext=${
            clinic.postal_code
          }`
        );
        const data = await response.json();
        const results = transformData(data);
        return results;
      } catch (err) {
        console.log(err);
      }
    })
  );
};

export const getCoordinate = async searchTerm => {
  try {
    const response = await fetch(
      `https://geocoder.api.here.com/6.2/geocode.json?app_id=kx4YbvbQsa7oF2WwH9su&app_code=HdQS63p-e0B3Q30KOCjFdw&searchtext=${searchTerm}`
    );
    const data = await response.json();
    console.log(data);
    const results = transformData(data);
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getClinics = async () => {
  try {
    const response = await fetch(
      "https://data.gov.sg/api/action/datastore_search?resource_id=b2871270-4eef-44a3-be98-908e2a73b19f"
    );
    const data = await response.json();
    const clinics = data.result.records;
    const coordinates = await getCoordinates(clinics);
    const copyClinicList = [...clinics];
    const combinedClinicList = copyClinicList.map(clinic => {
      const matchPostCode = clinic.postal_code;
      const foundCoordinates = coordinates.filter(
        e => e.address.PostalCode === matchPostCode
      );
      const combinedList = Object.assign({ ...clinic }, ...foundCoordinates);
      return combinedList;
    });
    console.log(combinedClinicList);
    return combinedClinicList;
  } catch (err) {
    console.log(err);
  }
};

//combine clinics object (line 50) with coordinates (line51) data match it with post code like in mockData to form a combined object with latitude.
