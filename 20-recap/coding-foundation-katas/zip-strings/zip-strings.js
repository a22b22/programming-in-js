function zipStrings(strA, strB) {
  let result = "";
  const maxLength = Math.max(strA.length, strB.length);
  for (let index = 0; index < maxLength; index++) {
    if (index < strA.length) {
      result += strA[index];
    }
    if (index < strB.length) {
      result += strB[index];
    }
  }
  return result;
}
