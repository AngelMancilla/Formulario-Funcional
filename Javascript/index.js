const firstName = document.getElementById("name")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("formAction")

let errName = document.getElementById("errorName")
let errLastName = document.getElementById("errorLastName")
let errEmail = document.getElementById("errorEmail")
let errPassword = document.getElementById("errorPassword")

firstName.addEventListener('input', function (event) {
 
    if (firstName.validity.valid) {      
      errName.innerHTML = ''; 
      errName.className = 'error'; 
      firstName.classList.remove("form-error")
    } else {     
      showError(firstName, errName);
    }
})
lastName.addEventListener('input', function (event) {
 
    if (lastName.validity.valid) {     
      errLastName.innerHTML = ''; 
      errLastName.className = 'error'; 
      lastName.classList.remove("form-error")
    } else {
      showError(lastName, errLastName);
    }
})

email.addEventListener('input', function (event) {
    if (email.validity.valid) {
      errEmail.innerHTML = ''; 
      errEmail.className = 'error'; 
      email.classList.remove("form-error")
    } else {
      showError(email, errEmail);
    }
})

password.addEventListener('input', function (event) {
    if (password.validity.valid) {
      errPassword.innerHTML = ''; 
      errPassword.className = 'error'; 
      password.classList.remove("form-error")
    } else {
      showError(password, errPassword);
    }
})

form.addEventListener('submit', function (event) {
    let entrar = false
    if(!firstName.validity.valid) {
        showError(firstName, errName);
        event.preventDefault();
        entrar = true
    }
    if(!lastName.validity.valid) {
        showError(lastName, errLastName);
        event.preventDefault();
        entrar = true
    }
    if(!email.validity.valid) {
        showError(email, errEmail);
        event.preventDefault();
        entrar = true
      }
    if(!password.validity.valid) {
        showError(password, errPassword);
        event.preventDefault();
        entrar = true
    }
    if(entrar) {
        event.preventDefault()
    }
    else {
        alert("REGISTRO EXITOSO")
    }
      
  });

  function showError(errInput, errMessage) {
    errInput.classList.add("form-error")
    if(errInput.validity.valueMissing) {
      errMessage.textContent = 'No puede dejar el campo vacio.';
    } else if(errInput.validity.typeMismatch) {
      errMessage.textContent = `El valor introducido debe ser un ${errInput}.`;
    } else if(errInput.validity.tooShort) {
      errMessage.textContent = `El ${errInput} debe tener al menos ${ errInput.minLength } caracteres; ha introducido ${ errInput.value.length }.`;
    } 
    errMessage.className = 'error activo';
  }