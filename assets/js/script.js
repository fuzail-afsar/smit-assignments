(function () {
  // Functions
  function init() {
    authorizePages();
    logout();
  }

  function authorizePages() {
    var isLoggedIn = User().isLoggedIn();
    if (
      window.location.pathname.lastIndexOf("signin.html") !== -1 ||
      window.location.pathname.lastIndexOf("signup.html") !== -1
    ) {
      if (isLoggedIn) window.location.assign("index.html");
    } else if (!isLoggedIn) window.location.assign("signin.html");
  }

  function logout() {
    var logoutUserElems = document.querySelectorAll(".logout-user");
    if (logoutUserElems.length) {
      for (var i = 0; i < logoutUserElems.length; i++) {
        logoutUserElems[i].addEventListener("click", user.signOutUser);
      }
    }
  }

  return init();
})();
