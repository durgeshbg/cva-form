function displayErr(elem, msg) {
  elem.nextElementSibling.textContent = msg;
  if (msg == '') {
    elem.classList.add('valid');
    elem.classList.remove('invalid');
  } else {
    elem.classList.add('invalid');
    elem.classList.remove('valid');
  }
}

function checkEmail(e) {
  const email = e.target;
  if (email.validity.valueMissing) {
    displayErr(email, 'Email is required!');
  } else if (email.validity.typeMismatch) {
    displayErr(email, 'Not a valid email address!');
  } else {
    displayErr(email, '');
  }
}

function checkCountry(e) {
  const country = e.target;
  const americanCountries = [
    'antigua and barbuda',
    'argentina',
    'bahamas',
    'barbados',
    'belize',
    'bolivia',
    'brazil',
    'canada',
    'chile',
    'colombia',
    'costa rica',
    'cuba',
    'dominica',
    'dominican republic',
    'ecuador',
    'el salvador',
    'grenada',
    'guatemala',
    'guyana',
    'haiti',
    'honduras',
    'jamaica',
    'mexico',
    'nicaragua',
    'panama',
    'paraguay',
    'peru',
    'saint kitts and nevis',
    'saint lucia',
    'saint vincent and the grenadines',
    'suriname',
    'trinidad and tobago',
    'united states',
    'uruguay',
    'venezuela',
  ];
  if (country.validity.valueMissing) {
    displayErr(country, 'Country is required!');
  } else if (!americanCountries.includes(country.value.toLowerCase())) {
    displayErr(country, 'Not a valid american country!');
  } else {
    displayErr(country, '');
  }
}

function checkZipcode(e) {
  const pc = e.target;
  if (pc.validity.valueMissing) {
    displayErr(pc, 'Zipcode is required!');
  } else if (pc.validity.patternMismatch) {
    displayErr(pc, 'Use american postal codes only!');
  } else {
    displayErr(pc, '');
  }
}

document.querySelector('#email').addEventListener('input', checkEmail);
document.querySelector('#country').addEventListener('input', checkCountry);
document.querySelector('#zipcode').addEventListener('input', checkZipcode);
