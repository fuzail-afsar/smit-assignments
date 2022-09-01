(function () {
  var signupFormElem = document.getElementById("signup");
  var signupForm;
  var toast = Toast();

  function init() {
    signupForm = FormValidation(signupFormElem);
    signupForm.init();
    toast.init();
    signupFormElem.addEventListener("submit", signupFormSubmitHandler);
  }

  // Handlers
  function signupFormSubmitHandler(event) {
    event.preventDefault();

    var usernameElem = event.target[0];
    var emailElem = event.target[1];
    var passwordElem = event.target[2];

    if (!signupForm.isValidated()) return;

    var user = User();
    if (!user.isUserExist(usernameElem.value)) {
      user.add(usernameElem.value, emailElem.value, passwordElem.value);

      window.location.assign("index.html");
    } else {
      toast.show("Signup Failed!", "User name already exist");
    }
  }

  return init();
})();
