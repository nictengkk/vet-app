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

export const combineData = (clinicList, resultList) => {
  let copyList = [...clinicList];
  const combinedList = copyList.map(clinic => {
    const matchPostCode = clinic.postal_code.toString();
    const filteredClinic = resultList.find(({ results, matchingPostCode }) => {
      return matchingPostCode[1].postalCode === matchPostCode;
    });
    clinic.results = filteredClinic.results;
    return clinic;
  });
  return combinedList;
  // const filteredList = newList.filter(clinic => !!clinic.results);
  // return filteredList;
};
