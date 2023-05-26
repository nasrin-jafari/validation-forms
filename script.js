let $ = document;
const nameInput = $.querySelector("#nameInput");
const nameError = $.querySelector("#nameInputError");
const emailInput = $.querySelector("#emailInput");
const emailError = $.querySelector("#emailInputError");
const passwordInput = $.querySelector("#passwordInput");
const passwordError = $.querySelector("#passwordInputError");
const validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validName = /^[A-Za-z]+$/;
const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]{8,}$/;
const validateUsername = (name) => {
  const Name = name.target.value;
  if (!validName.test(Name)) {
    nameError.innerText = "Username must contain English letters only";
    nameInput.classList.add("border-red");
  } else if (Name.length > 15) {
    nameError.innerText = "Username should less than 15 characters";
    nameInput.classList.add("border-red");
  } else if (Name.length > 15 && !validName.test(Name)) {
    nameError.innerText =
      "Username should less than 15 characters and contain English letters only";
    nameInput.classList.add("border-red");
  } else {
    nameError.innerText = "";
    nameInput.classList.remove("border-red");
  }
};
const validateEmail = (Email) => {
  const email = Email.target.value;
  if (!validemail.test(email)) {
    emailError.innerText = "email is incorrect";
    emailInput.classList.add("border-red");
  } else {
    emailError.innerText = "";
    emailInput.classList.remove("border-red");
  }
};
const validatePassword = (Password) => {
  const password = Password.target.value;
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]{8,}$/;
  if (!validPassword.test(password)) {
    passwordError.innerText =
      "Password must contain 8 characters with one lowercase letter, one uppercase letter, and one digit.";
    passwordInput.classList.add("border-red");
  } else {
    passwordError.innerText = "";
    passwordInput.classList.remove("border-red");
  }
};
nameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
