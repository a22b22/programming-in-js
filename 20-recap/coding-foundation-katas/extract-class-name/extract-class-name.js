function extractClassName(sessionTitle) {
  let result = null;
  const classYearLength = 11;
  const regex =
    /\bClass\b\s\d\d\d\d\s\b(?:Januar|Februar|März|Maerz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember)/; // /gi;
  const monthObject = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };
  const classPosition = sessionTitle.search(regex);
  if (classPosition !== -1) {
    const yearPosition = classPosition + 6;
    const positionAfterYear = classPosition + classYearLength;
    let index = 0;
    for (const objectMonthName in monthObject) {
      index++;
      let foundMonthPosition = sessionTitle.indexOf(
        objectMonthName,
        positionAfterYear
      );

      if (foundMonthPosition === positionAfterYear) {
        let monthTwoDigitStr = monthObject[objectMonthName];
        result =
          sessionTitle.slice(yearPosition, yearPosition + 4) +
          "-" +
          monthTwoDigitStr;

        break;
      }
    }
  }
  return result;
}
