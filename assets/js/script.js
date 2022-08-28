var ASSETS_DIRECTORY = "./assets/";
var IMAGES_DIRECTORY = ASSETS_DIRECTORY + "images/";

init();

function init() {
  authorizePages();
  setAvatar();
  setFooterYear();
  logout();
  hideLoader();
}

function hideLoader() {
  var loaderElem = document.getElementsByClassName("loader")[0];
  setTimeout(function () {
    loaderElem.classList.add("visibility-hidden", "d-none");
  }, 1000);
}

function setFooterYear() {
  var yearElem = document.getElementById("year");
  if (yearElem) yearElem.innerHTML = new Date().getFullYear();
}

function setAvatar() {
  var avatarBtnElem = document.querySelector(".avatar-btn");

  if (avatarBtnElem) avatarBtnElem.innerHTML = getLoggedInUser().username[0];
}

function logout() {
  var logoutUserElems = document.querySelectorAll(".logout-user");

  for (var i = 0; i < logoutUserElems.length; i++) {
    logoutUserElems[i].addEventListener("click", signOutUser);
  }
}
