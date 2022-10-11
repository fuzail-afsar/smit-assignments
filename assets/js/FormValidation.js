class GenerateValidationRegexMessage {
  #validation = {};
  add(validationName, regex, message) {
    this.#validation[validationName] = {
      regex: regex,
      message: message,
    };
  }

  getAll() {
    return Object.assign({}, this.#validation);
  }
}

class FormValidation {
  #validation;
  #isFormValid;
  #formElem;
  constructor(formElem) {
    this.#formElem = formElem;
    this.#init();
  }
  #init() {
    this.#initValidationMessages();
    this.#initEvents();
    this.#initMaxDate();
  }

  #initValidationMessages() {
    const validationRegexMessage = new GenerateValidationRegexMessage();
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
        /^.{6,}$/,
      ],
      [
        "Password must contain at least one upper case letter",
        "Password must contain at least one lower case letter",
        "Password must contain at least one digit",
        "Password must contain at least one special character",
        "Password must be minimum six character in length",
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
    this.#validation = validationRegexMessage.getAll();
  }

  #initEvents() {
    this.#formElem.addEventListener("keyup", this.#validate.bind(this));
    this.#formElem.addEventListener("change", this.#validate.bind(this));
    this.#formElem.addEventListener(
      "submit",
      this.#validateAll.bind(this),
      true
    );
  }

  #initMaxDate() {
    const maxTodayElems = this.#formElem.querySelectorAll(".max-today");
    const maxTodayElemsLen = maxTodayElems.length;
    if (maxTodayElemsLen) {
      const dtToday = new Date();

      const month = dtToday.getMonth() + 1;
      const day = dtToday.getDate();
      const year = dtToday.getFullYear();

      if (month < 10) month = "0" + month.toString();
      if (day < 10) day = "0" + day.toString();

      const maxDate = year + "-" + month + "-" + day;
      for (let i = 0; i < maxTodayElemsLen; i++) {
        const maxTodayElem = maxTodayElems[i];
        maxTodayElem.setAttribute("max", maxDate);
      }
    }
  }

  _showValidationError(element, message) {
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

  _removeValidationError(element) {
    var parentElem = element.closest("div");
    element.classList.remove("is-invalid");
    var errorElem = parentElem.querySelector(".invalid-feedback");
    if (errorElem) {
      errorElem.remove();
    }
  }

  #validate(event) {
    const element = event.target || event;

    const value = element.value;
    if (value) value.trim();

    const emptyValidation = this.#validation.empty;
    const emptyRegex = emptyValidation.regex;
    const emptyMessage = emptyValidation.message;

    const passwordValidation = this.#validation.password;
    const passwordRegexs = passwordValidation.regex;
    const passwordMessages = passwordValidation.message;
    const isElementClass = element.classList;

    if (isElementClass.contains("required")) {
      if (emptyRegex.test(value)) {
        this._showValidationError(element, emptyMessage);
        return false;
      }
    }

    if (value) {
      if (isElementClass.contains("nospace")) {
        if (!this.#validation.nospace.regex.test(value)) {
          this._showValidationError(element, this.#validation.nospace.message);
          return false;
        }
      }

      if (isElementClass.contains("email")) {
        if (!this.#validation.email.regex.test(value)) {
          this._showValidationError(element, this.#validation.email.message);
          return false;
        }
      }

      if (isElementClass.contains("password")) {
        if (emptyRegex.test(value)) {
          this._showValidationError(element, emptyMessage);
          return false;
        }
        if (!passwordRegexs[0].test(value)) {
          this._showValidationError(element, passwordMessages[0]);
          return false;
        }
        if (!passwordRegexs[1].test(value)) {
          this._showValidationError(element, passwordMessages[1]);
          return false;
        }
        if (!passwordRegexs[2].test(value)) {
          this._showValidationError(element, passwordMessages[2]);
          return false;
        }
        if (!passwordRegexs[3].test(value)) {
          this._showValidationError(element, passwordMessages[3]);
          return false;
        }
        if (!passwordRegexs[4].test(value)) {
          this._showValidationError(element, passwordMessages[4]);
          return false;
        }
      }

      if (isElementClass.contains("cnic")) {
        if (!this.#validation.cnic.regex.test(value)) {
          this._showValidationError(element, this.#validation.cnic.message);
          return false;
        }
      }

      if (isElementClass.contains("phone")) {
        if (!this.#validation.phone.regex.test(value)) {
          this._showValidationError(element, this.#validation.phone.message);
          return false;
        }
      }

      if (isElementClass.contains("image-type")) {
        if (!this.#validation.imageType.regex.test(element.files[0].name)) {
          this._showValidationError(
            element,
            this.#validation.imageType.message
          );
          return false;
        }
      }

      if (isElementClass.contains("file-size")) {
        if (element.files[0].size >= 500000) {
          this._showValidationError(
            element,
            "File size must be less than 500KB"
          );
          return false;
        }
      }
    }

    this._removeValidationError(element);
    return true;
  }

  #validateAll(event) {
    event.preventDefault();
    this.#isFormValid = true;
    const fields = event.target;
    for (let i = 0; i < fields.length - 1; i++) {
      if (!this.#validate(fields[i])) {
        this.#isFormValid = false;
      }
    }
    return this.#isFormValid;
  }

  reset() {
    for (let i = 0; i < this.#formElem.length - 1; i++) {
      const element = this.#formElem[i];
      if (element.value) {
        element.value = "";
      }
    }
  }

  isValidated() {
    return this.#isFormValid;
  }
}
