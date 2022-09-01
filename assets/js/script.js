(function () {
  function init() {
    authorizePages();
    setAvatar();
    setFooterYear();
    logout();
    hideLoader();
  }

  function hideLoader() {
    var loaderElem = document.getElementsByClassName("loader")[0];
    if (loaderElem) {
      setTimeout(function () {
        loaderElem.classList.add("visibility-hidden", "d-none");
      }, 1000);
    }
  }

  function setFooterYear() {
    var yearElem = document.getElementById("year");
    if (yearElem) yearElem.innerHTML = new Date().getFullYear();
  }

  function setAvatar() {
    var avatarBtnElem = document.querySelector(".avatar-btn");

    if (avatarBtnElem)
      avatarBtnElem.innerHTML = User().getLoggedInUser().username[0];
  }

  function logout() {
    var logoutUserElems = document.querySelectorAll(".logout-user");
    if (logoutUserElems.length) {
      for (var i = 0; i < logoutUserElems.length; i++) {
        logoutUserElems[i].addEventListener("click", User().signOutUser);
      }
    }
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

  return init();
})();
