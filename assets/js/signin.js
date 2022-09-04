(function () {
  var signinFormElem = document.getElementsByTagName("form")[0];
  var signinForm;
  var toast = Toast();

  function init() {
    signinForm = FormValidation(signinFormElem);
    signinForm.init();
    toast.init();
    signinFormElem.addEventListener("submit", signinFormSubmitHandler);
  }

  // Handlers
  function signinFormSubmitHandler(event) {
    event.preventDefault();

    var usernameElem = event.target[0];
    var passwordElem = event.target[1];

    if (!signinForm.isValidated()) return;
    var user = User();
    if (user.isUserExist(usernameElem.value)) {
      var userInfo = user.matchUserCredentials(
        usernameElem.value,
        passwordElem.value
      );
      if (userInfo) {
        user.setLoggedInUser({
          username: userInfo.username,
          email: userInfo.email,
        });

        window.location.assign("index.html");
      } else {
        toast.show("Signin Failed!", "Credentials not matched");
      }
    } else {
      toast.show("Signin Failed!", "User Name not exist");
    }
  }

  return init();
})();
