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
    displayErr(email, 'Not a valid email address');
  } else {
    displayErr(email, '');
  }
}

document.querySelector('#email').addEventListener('input', checkEmail);
