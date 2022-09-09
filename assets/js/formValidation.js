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
  validationRegexMessage.add("nospace", /^\S+$/, "Space is not allowed");
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
  validationRegexMessage.add(
    "cnic",
    /^[0-9]{5}-[0-9]{7}-[0-9]$/,
    "Invalid CNIC no"
  );
  validationRegexMessage.add(
    "phone",
    /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/,
    "Invalid phone no"
  );
  validationRegexMessage.add(
    "imageType",
    /\.(jpg|jpeg|png)$/,
    "Invalid image type"
  );

  var validation = validationRegexMessage.getAll();

  function FormValidation() {}

  FormValidation.prototype = (function () {
    var isFormValid;

    function init() {
      initEvents();
      initMaxDate();
    }

    function initEvents() {
      formElem.addEventListener("keyup", validate);
      formElem.addEventListener("change", validate);
      formElem.addEventListener("submit", validateAll, true);
    }

    function initMaxDate() {
      var maxTodayElems = formElem.querySelectorAll(".max-today");
      var maxTodayElemsLen = maxTodayElems.length;
      if (maxTodayElemsLen) {
        var dtToday = new Date();

        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();

        if (month < 10) month = "0" + month.toString();
        if (day < 10) day = "0" + day.toString();

        var maxDate = year + "-" + month + "-" + day;
        for (var i = 0; i < maxTodayElemsLen; i++) {
          var maxTodayElem = maxTodayElems[i];
          maxTodayElem.setAttribute("max", maxDate);
        }
      }
    }

    function showValidationError(element, message) {
      var parentElem = element.closest("div");
      element.classList.add("is-invalid");
      var errorElem = parentElem.querySelector(".invalid-feedback");

      if (errorElem) {
        errorElem.innerHTML = message;
      } else {
        element.insertAdjacentHTML(
          "afterend",
          `<div class="invalid-feedback">${message}</div>`
        );
      }
    }

    function removeValidationError(element) {
      var parentElem = element.closest("div");
      element.classList.remove("is-invalid");
      var errorElem = parentElem.querySelector(".invalid-feedback");
      if (errorElem) {
        errorElem.remove();
      }
    }

    function validate(event) {
      var element = event.target || event;

      var value = element.value;
      if (value) value.trim();

      var emptyValidation = validation.empty;
      var emptyRegex = emptyValidation.regex;
      var emptyMessage = emptyValidation.message;

      var passwordValidation = validation.password;
      var passwordRegexs = passwordValidation.regex;
      var passwordMessages = passwordValidation.message;
      var isElementClass = element.classList;

      if (isElementClass.contains("required")) {
        if (emptyRegex.test(value)) {
          showValidationError(element, emptyMessage);
          return false;
        }
      }

      if (value) {
        if (isElementClass.contains("nospace")) {
          if (!validation.nospace.regex.test(value)) {
            showValidationError(element, validation.nospace.message);
            return false;
          }
        }

        if (isElementClass.contains("email")) {
          if (!validation.email.regex.test(value)) {
            showValidationError(element, validation.email.message);
            return false;
          }
        }

        if (isElementClass.contains("password")) {
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
        }

        if (isElementClass.contains("cnic")) {
          if (!validation.cnic.regex.test(value)) {
            showValidationError(element, validation.cnic.message);
            return false;
          }
        }

        if (isElementClass.contains("phone")) {
          if (!validation.phone.regex.test(value)) {
            showValidationError(element, validation.phone.message);
            return false;
          }
        }

        if (isElementClass.contains("image-type")) {
          if (!validation.imageType.regex.test(element.files[0].name)) {
            showValidationError(element, validation.imageType.message);
            return false;
          }
        }

        if (isElementClass.contains("file-size")) {
          if (element.files[0].size >= 500000) {
            showValidationError(element, "File size must be less than 500KB");
            return false;
          }
        }
      }

      removeValidationError(element);
      return true;
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

    function reset() {
      for (var i = 0; i < formElem.length - 1; i++) {
        var element = formElem[i];
        if (element.value) {
          element.value = "";
        }
      }
    }

    function isValidated() {
      return isFormValid;
    }
    return {
      init: init,
      isValidated: isValidated,
      reset: reset,
    };
  })();

  return new FormValidation(formElem);
}
