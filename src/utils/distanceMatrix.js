export const getDistance = async (userAddress, list) => {
  // console.log(list);
  const distances = await Promise.all(
    list.map(async clinic => {
      try {
        const response = await fetch(
          `https://www.mapquestapi.com/directions/v2/route?key=${
            process.env.REACT_APP_MAPQUEST_API_KEY
          }&from=${userAddress}&to=${clinic.postal_code}`
        );
        const data = await response.json();
        const results = data.route.distance;
        const matchingPostCode = data.route.locations;
        return { results: results, matchingPostCode: matchingPostCode };
      } catch (err) {
        console.log(err);
      }
    })
  );
  return distances;
  //prepare data here and return combined data
};

export const combineData = (list, list2) => {
  let copyList = [...list];
  const newList = copyList.map(clinic => {
    const matchPostCode = clinic.postal_code;
    const filteredClinics = list2.filter(obj => {
      if (!!obj.matchingPostCode) {
        return obj.matchingPostCode[1].postalCode === matchPostCode;
      } else {
        return false;
      }
    });
    const newCombinedList = Object.assign({ ...clinic }, ...filteredClinics);
    return newCombinedList;
  });
  const filteredList = newList.filter(clinic => !!clinic.results);
  return filteredList;
};
