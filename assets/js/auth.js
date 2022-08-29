var signupFormElem = document.getElementById("signup");
var signinFormElem = document.getElementById("signin");
var usernameElem = document.getElementById("username");

var toastElem = document.getElementById("toast");
var toastHeaderElem = toastElem.querySelector(".toast-header strong");
var toastBodyElem = toastElem.querySelector(".toast-body");
var toast = new bootstrap.Toast(toastElem);

var validation = {
  space: new Validation(/\s+/, "Space is not allowed"),
  empty: new Validation(/^$/, "This field is required"),
  email: new Validation(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "Invalid email address"
  ),
  password: new Validation(
    [
      /^(?=.*?[A-Z])+/,
      /^(?=.*?[a-z])+/,
      /^(?=.*?[0-9])+/,
      /^(?=.*?[#?!@$%^&*-])+/,
      /^.{8,}$/,
    ],
    [
      "Password must contain at least one upper case letter",
      "Password must contain at least one lower case letter",
      "Password must contain at least one digit",
      "Password must contain at least one special character",
      "Password must be minimum eight in length ",
    ]
  ),
};

init();

function init() {
  authorizePages();
}

function Validation(regex, message) {
  this.regex = regex;
  this.message = message;
}

function showValidationError(element, message) {
  element.classList.add("is-invalid");
  element.parentElement.querySelector(".invalid-feedback").innerHTML = message;
}

function removeValidationError(element) {
  element.classList.remove("is-invalid");
  element.parentElement.querySelector(".invalid-feedback").innerHTML = "";
}

function formValidation(event) {
  var element = event.target || event;
  var value = element.value;

  var emptyValidation = validation.empty;
  var emptyRegex = emptyValidation.regex;
  var emptyMessage = emptyValidation.message;

  var passwordValidation = validation.password;
  var passwordRegexs = passwordValidation.regex;
  var passwordMessages = passwordValidation.message;

  switch (element.id) {
    case "username":
      if (emptyRegex.test(value)) {
        showValidationError(element, emptyMessage);
        return false;
      }
      if (validation.space.regex.test(value)) {
        showValidationError(element, validation.space.message);
        return false;
      }
      removeValidationError(element);
      return true;
    case "email":
      if (emptyRegex.test(value)) {
        showValidationError(element, emptyMessage);
        return false;
      }
      if (!validation.email.regex.test(value)) {
        showValidationError(element, validation.email.message);
        return false;
      }
      removeValidationError(element);
      return true;
    case "password":
      if (emptyRegex.test(value)) {
        showValidationError(element, emptyMessage);
        return false;
      }
      if (!passwordRegexs[0].test(value)) {
        showValidationError(element, passwordMessages[0]);
        return false;
      }
      if (!passwordRegexs[1].test(value)) {
        showValidationError(element, passwordMessages[1]);
        return false;
      }
      if (!passwordRegexs[2].test(value)) {
        showValidationError(element, passwordMessages[2]);
        return false;
      }
      if (!passwordRegexs[3].test(value)) {
        showValidationError(element, passwordMessages[3]);
        return false;
      }
      if (!passwordRegexs[4].test(value)) {
        showValidationError(element, passwordMessages[4]);
        return false;
      }
      removeValidationError(element);
      return true;
  }
  return false;
}

function validateAllFormFields(formFields) {
  var isFormValidated = true;
  for (var i = 0; i < formFields.length; i++) {
    if (!formValidation(formFields[i])) {
      isFormValidated = false;
    }
  }
  return isFormValidated;
}

// Show Bootstrap Toast
function showToast(headerText, bodyText) {
  toastHeaderElem.innerHTML = headerText;
  toastBodyElem.innerHTML = bodyText;
  toast.show();
}

// Handlers
function signupFormSubmitHandler(event) {
  event.preventDefault();

  var usernameElem = event.target[0];
  var emailElem = event.target[1];
  var passwordElem = event.target[2];

  if (!validateAllFormFields([usernameElem, emailElem, passwordElem])) return;

  if (!isUserExist(usernameElem.value)) {
    var user = addUser(usernameElem.value, emailElem.value, passwordElem.value);
    setLoggedInUser(user);

    window.location.assign("index.html");
  } else {
    showToast("Signup Failed!", "User name already exist");
  }
}

function signinFormSubmitHandler(event) {
  event.preventDefault();

  var usernameElem = event.target[0];
  var passwordElem = event.target[1];

  if (!validateAllFormFields([usernameElem, passwordElem])) return;

  if (isUserExist(usernameElem.value)) {
    user = matchUserCredentials(usernameElem.value, passwordElem.value);
    if (user) {
      setLoggedInUser(user);

      window.location.assign("index.html");
    } else {
      showToast("Signin Failed!", "Credentials not matched");
    }
  } else {
    showToast("Signin Failed!", "User Name not exist");
  }
}

// Events
if (signupFormElem) {
  signupFormElem.addEventListener("keyup", formValidation);
  signupFormElem.addEventListener("submit", signupFormSubmitHandler);
}

if (signinFormElem) {
  signinFormElem.addEventListener("keyup", formValidation);
  signinFormElem.addEventListener("submit", signinFormSubmitHandler);
}
