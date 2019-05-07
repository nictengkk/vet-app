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
    const results = transformData(data);
    return results;
  } catch (err) {
    console.log(err);
  }
};


