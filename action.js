// javascript sees html file as a document
// These are global variables
// Get the element such button etc.
const submitButton = document.querySelector(".submitButton");
const revealPassword = document.querySelector(".reveal_password");
// using id
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
// using class selector
const errorCircle = document.querySelectorAll(".error_circle");
const errorText = document.querySelectorAll(".error_text");
// 

// Write the logic
    // the element should do something when I click on it
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // get the user input value
    // local variable: I mean the fName is a local variable that can only be accessed with its scope.
    const fName = firstName.value;
    const lName = lastName.value;
    const eMail = email.value;
    const passWord = password.value;

    // check if the user entered all the required fields
    if (fName === "") {
        firstName.classList.add("error");
        errorCircle[0].classList.remove("hide")
        errorText[0].classList.remove("hide")
    } else {
        firstName.classList.remove("error");
        errorCircle[0].classList.add("hide")
        errorText[0].classList.add("hide")
    }

    if (lName === "") {
        lastName.classList.add("error");
        errorCircle[1].classList.remove("hide")
        errorText[1].classList.remove("hide")
    } else {
        lastName.classList.remove("error");
        errorCircle[1].classList.add("hide")
        errorText[1].classList.add("hide")
    }

    if (eMail === "") {
        email.classList.add("error");
        errorCircle[2].classList.remove("hide")
        errorText[2].classList.remove("hide")
    } else {
        email.classList.remove("error");
        errorCircle[2].classList.add("hide")
        errorText[2].classList.add("hide")
    }

    if (passWord === "") {
        password.classList.add("error");
        errorCircle[3].classList.remove("hide")
        errorText[3].classList.remove("hide")
        revealPassword.classList.add("hide")
    } else {
        password.classList.remove("error");
        errorCircle[3].classList.add("hide")
        errorText[3].classList.add("hide")
        revealPassword.classList.remove("hide")
    }

    // when all the checks are done, then send to the backend.
    // console.log(fName, " : ", lName, " : ", eMail, " : ", passWord)
})

revealPassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})