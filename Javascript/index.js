const firstName = document.getElementById("name")
const lasName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("formAction")

let nameErr = document.getElementById("name-err")
let lastNameErr = document.getElementById("lastName-err")
let emailErr = document.getElementById("email-err")
let passErr = document.getElementById("pass-err")

form.addEventListener("submit", event => {
    let regexEMail = /^\S+@\S+\.\S+$/
    delete enter
    let enter = false

    event.preventDefault()

        if(!regexEMail.test(email)) {
            enter = true
            emailErr.innerHTML = "Email introducido no es valido."
            console.log(`3- ${enter}`);
        }
        if(password.value.length < 5) {
            enter = true
            passErr.innerHTML = "La contraseña introducida no es valida."
            console.log(`4- ${enter}`);
        }
        if(!enter) {
            alert("SE HA REGISTRADO CON EXITO")
        }
})
