function displayErr(elem, msg) {
  if (msg == '') {
    elem.classList.add('valid');
    elem.classList.remove('invalid');
  } else {
    elem.classList.add('invalid');
    elem.classList.remove('valid');
    msg = '*' + msg;
  }
  elem.nextElementSibling.textContent = msg;
}

function checkEmail() {
  const email = document.querySelector('#email');
  email.addEventListener('input', () => {
    if (email.validity.valueMissing) {
      displayErr(email, 'Email is required!');
    } else if (email.validity.typeMismatch) {
      displayErr(email, 'Not a valid email address!');
    } else {
      displayErr(email, '');
    }
  });
  return email.checkValidity();
}

function checkCountry() {
  const country = document.querySelector('#country');
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
  country.addEventListener('input', () => {
    if (country.validity.valueMissing) {
      displayErr(country, 'Country is required!');
    } else if (!americanCountries.includes(country.value.toLowerCase())) {
      displayErr(country, 'Not a valid american country!');
    } else {
      displayErr(country, '');
    }
  });
  return country.checkValidity();
}

function checkZipcode() {
  const pc = document.querySelector('#zipcode');
  pc.addEventListener('input', () => {
    if (pc.validity.valueMissing) {
      displayErr(pc, 'Zipcode is required!');
    } else if (pc.validity.patternMismatch) {
      displayErr(pc, 'Use american postal codes only!');
    } else {
      displayErr(pc, '');
    }
  });
  return pc.checkValidity();
}

function checkPassword() {
  const password = document.querySelector('#password');
  password.addEventListener('input', () => {
    if (password.validity.valueMissing) {
      displayErr(password, 'Password missing!');
    } else if (password.value.length < 8) {
      displayErr(password, 'Password should atleast have 8 characters!');
    } else {
      displayErr(password, '');
    }
  });
  return password.checkValidity();
}

function checkCpassword() {
  const cpassword = document.querySelector('#cpassword');
  const password = document.querySelector('#password');

  cpassword.addEventListener('input', () => {
    if (cpassword.validity.valueMissing) {
      displayErr(cpassword, 'Password missing!');
    } else if (cpassword.value.length < 8) {
      displayErr(cpassword, 'Password should atleast have 8 characters!');
    } else if (cpassword.value !== password.value) {
      displayErr(cpassword, "Passwords do'nt match!");
    } else {
      displayErr(cpassword, '');
    }
  });
  return cpassword.checkValidity() && cpassword.value === password.value;
}

document.querySelector('form').addEventListener('input', () => {
  checkEmail();
  checkCountry();
  checkZipcode();
  checkPassword();
  checkCpassword();
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    checkEmail() &&
    checkCountry() &&
    checkZipcode() &&
    checkPassword() &&
    checkCpassword()
  ) {
    e.target.style.display = 'none';
    document.querySelector('body').innerHTML = '&#x270B;';
  }
});
