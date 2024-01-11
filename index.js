function isValidZipCode(zipcodde) {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcodde);
}
