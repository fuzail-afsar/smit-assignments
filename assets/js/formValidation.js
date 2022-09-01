function GenerateValidationRegexMessage() {
  var validation = {};
  function GenerateValidationRegexMessage() {}

  GenerateValidationRegexMessage.prototype = (function () {
    function add(validationName, regex, message) {
      validation[validationName] = {
        regex: regex,
        message: message,
      };
    }

    function getAll() {
      return Object.assign({}, validation);
    }
    return {
      add,
      getAll,
    };
  })();

  return new GenerateValidationRegexMessage();
}

function FormValidation(formElem) {
  var validationRegexMessage = GenerateValidationRegexMessage();
  validationRegexMessage.add("space", /\s+/, "Space is not allowed");
  validationRegexMessage.add("empty", /^$/, "This field is required");
  validationRegexMessage.add(
    "email",
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "Invalid email address"
  );
  validationRegexMessage.add(
    "password",
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
  );

  var validation = validationRegexMessage.getAll();

  function FormValidation() {}

  FormValidation.prototype = (function () {
    var isFormValid;

    function init() {
      formElem.addEventListener("keyup", validate);
      formElem.addEventListener("submit", validateAll);
    }

    function showValidationError(element, message) {
      element.classList.add("is-invalid");
      element.parentElement.querySelector(".invalid-feedback").innerHTML =
        message;
    }

    function removeValidationError(element) {
      element.classList.remove("is-invalid");
      element.parentElement.querySelector(".invalid-feedback").innerHTML = "";
    }

    function validate(event) {
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

    function validateAll(event) {
      event.preventDefault();
      isFormValid = true;
      var fields = event.target;
      for (var i = 0; i < fields.length - 1; i++) {
        if (!validate(fields[i])) {
          isFormValid = false;
        }
      }
      return isFormValid;
    }

    function isValidated() {
      return isFormValid;
    }
    return {
      init: init,
      isValidated: isValidated,
    };
  })();

  return new FormValidation(formElem);
}
