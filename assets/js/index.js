(function () {
  var appFormElem = document.getElementById("application-form");
  var adminLoginTabButtonElem = document.getElementById("admin-login-tab");
  var adminFormElem = document.getElementById("admin-form");
  var appForm = FormValidation(appFormElem);
  var adminForm = FormValidation(adminFormElem);

  var applicant = Applicant();
  var user = User();
  var toast = Toast();

  function init() {
    initEvents();
    functions();
    appForm.init();
    adminForm.init();
    toast.init();
  }

  function initEvents() {
    appFormElem.addEventListener("submit", appFormSubmitHandler);
    adminFormElem.addEventListener("submit", adminFormSubmitHandler);
    adminLoginTabButtonElem.addEventListener("click", adminLoginClickHandler);
  }

  //   Handlers
  function loadImageHandler(event) {
    var fields = this;
    var fieldsLen = fields.length;
    var newApplicant = {};
    for (var i = 0; i < fieldsLen - 1; i++) {
      var key = fields[i].id.toCamelCase("-");
      var value = fields[i].value;
      newApplicant[key] = i === fieldsLen - 2 ? event.target.result : value;
    }
    if (!applicant.isExist(newApplicant.cnic)) {
      applicant.add(newApplicant);
      appForm.reset();

      toast.show(
        "Registered!",
        `${newApplicant.fullName} you have been successfully registered`
      );
    } else {
      toast.show(
        `Sorry! ${newApplicant.fullName}`,
        `You have been already registered with this CNIC`
      );
    }
  }

  function errorImageHandler(error) {
    throw error;
  }

  function appFormSubmitHandler(event) {
    event.preventDefault();
    if (!appForm.isValidated()) return;
    try {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.querySelector("#picture").files[0]);
      reader.addEventListener("load", loadImageHandler.bind(this));
      reader.addEventListener("error", errorImageHandler);
    } catch (error) {
      console.error(error);
      toast.show("Sorry!", "Something went wrong");
      return;
    }
  }

  function adminFormSubmitHandler(event) {
    event.preventDefault();

    if (!adminForm.isValidated()) return;

    var username = event.target[0];
    var password = event.target[1];

    if (username.value === "admin" && password.value === "Admin%123") {
      user.loggedIn();
      toast.show("Success!", "You are now logged in");
      setTimeout(function () {
        script().showLoader();
        window.location.assign("admin.html");
      }, 1500);
    } else {
      toast.show("Sorry!", "Wrong Credentials");
    }
  }

  function adminLoginClickHandler() {
    user.isLoggedIn() && window.location.assign("admin.html");
    return;
  }

  return init();
})();
