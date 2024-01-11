function isValidZipCode(zipcode) {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
}

function displayErr(elem, msg) {
  elem.textContent = msg;
}
