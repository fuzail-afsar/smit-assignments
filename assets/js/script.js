function script() {
  var user = User();
  function init() {
    authorizePages();
    showHeader();
    initEvents();
  }

  function initEvents() {
    document
      .getElementsByClassName("logout-user")[0]
      .addEventListener("click", logoutUserHandler);
    window.addEventListener("load", hideLoader);
  }

  function authorizePages() {
    window.location.pathname.lastIndexOf("index.html") === -1 &&
      !user.isLoggedIn() &&
      window.location.assign("index.html");
  }

  function showHeader() {
    if (user.isLoggedIn()) {
      document
        .getElementsByTagName("header")[0]
        .classList.remove("invisible", "d-none");
    }
  }

  // Handlers
  function logoutUserHandler(event) {
    event.preventDefault();
    user.loggedOut();
    window.location.assign("index.html");
  }

  function showLoader() {
    document
      .getElementsByClassName("loader")[0]
      .classList.remove("invisible", "d-none");
  }

  function hideLoader() {
    setTimeout(function () {
      document
        .getElementsByClassName("loader")[0]
        .classList.add("invisible", "d-none");
    }, 1000);
  }

  return {
    init: init,
    showLoader: showLoader,
    hideLoader: hideLoader,
  };
}

script().init();
