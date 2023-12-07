function filterApiData(apiData, mandatoryKeys) {
  let apiDataArray = apiData;
  let mandatoryKeysArray = mandatoryKeys;
  let result = [];

  for (const object of apiDataArray) {
    let isObjectEligible = true;
    for (const mandatoryKey of mandatoryKeysArray) {
      if (!Object.hasOwnProperty.call(object, mandatoryKey)) {
        isObjectEligible = false;
        break;
      }
    }
    if (isObjectEligible) {
      result.push(object);
    }
  }

  return result;
}
