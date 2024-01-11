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
