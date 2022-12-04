const firstName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("formAction");

let errName = document.getElementById("errorName");
let errLastName = document.getElementById("errorLastName");
let errEmail = document.getElementById("errorEmail");
let errPassword = document.getElementById("errorPassword");

const elements = [firstName, lastName, email, password];
const errorMessages = [errName, errLastName, errEmail, errPassword];

elements.forEach((element, index) => {
  element.addEventListener('input', function (event) {
    if (element.validity.valid) {
      errorMessages[index].innerHTML = '';
      errorMessages[index].className = 'error';
      element.classList.remove("form-error")
    } else {
      showError(element, errorMessages[index]);
    }
  });
});

form.addEventListener('submit', function (event) {
  let entrar = false;

  elements.forEach((element, index) => {
    if (!element.validity.valid) {
      showError(element, errorMessages[index]);
      event.preventDefault();
      entrar = true;
    }
  });

  if (entrar) {
    event.preventDefault()
  } else {
    alert("REGISTRO EXITOSO")
  }
});

function showError(errInput, errMessage) {
  errInput.classList.add("form-error");
  if (errInput.validity.valueMissing) {
    errMessage.textContent = 'No puede dejar el campo vacio.';
  } else if (errInput.validity.typeMismatch) {
    errMessage.textContent = `El valor introducido debe ser un ${errInput}.`;
  } else if (errInput.validity.tooShort) {
    errMessage.textContent = `El ${errInput} debe tener al menos ${ errInput.minLength } caracteres; ha introducido ${ errInput.value.length }.`;
  }
  errMessage.className = 'error activo';
}
