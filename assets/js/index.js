var user = {};
var posts = [];

var userInfoElem = document.getElementById("user-info");
var userNameElem = userInfoElem.querySelector("#user-name");
var userProfileLabelElem = userInfoElem.querySelector(
  "label[for='user-profile']"
);
var userProfileElem = userInfoElem.querySelector("#user-profile");
var userProfileImageElem = userInfoElem.querySelector("img");
var userSaveElem = userInfoElem.querySelector("button");

var writePostElem = document.getElementById("write-post");
var avatarElem = writePostElem.querySelector(".avatar");
var writePostButtonElem = writePostElem.querySelector("button");

var postModalElem = document.getElementById("create-post");
var postContentElem = postModalElem.querySelector("#post-content");
var postImageElem = postModalElem.querySelector("#post-image");

var postsListingElem = document.getElementById("posts-listing");
var postsListingRowElem = postsListingElem.querySelector(".row");

var toastElem = document.getElementById("toast");
var toastHeaderElem = toastElem.querySelector(".toast-header strong");
var toastBodyElem = toastElem.querySelector(".toast-body");
var toast = new bootstrap.Toast(toastElem);

init();

function init() {
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
    userNameElem.value = user.name;

    uploadImage(user.image);

    disableUserInfoForm();

    enableWritePostButton();
  }

  if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
    renderPosts();
  }

  document.getElementById("year").innerHTML = new Date().getFullYear();
}

function userFormSubmitHandler() {
  event.preventDefault();

  var image = userProfileElem.files[0];

  if (userNameElem && image) {
    if (isVaidImage(image.name)) {
      var reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = function () {
        user.name = userNameElem.value;
        user.image = reader.result;
        localStorage.setItem("user", JSON.stringify(user));

        enableWritePostButton();

        uploadImage(user.image);

        disableUserInfoForm();

        showToast("Success", "Profile uploaded");
      };
    } else {
      userProfileElem.value = "";
      showToast("Error", "Please! Upload only image file");
    }
  } else {
    showToast("Error", "Please! Upload username and image");
  }
}

function postFormSubmitHandler() {
  event.preventDefault();
  var image = postImageElem.files[0];

  if (image || postContentElem.value) {
    var post = {
      content: postContentElem.value,
      date: new Date(),
    };
    if (image) {
      if (!isVaidImage(image.name)) {
        postImageElem.value = "";
        return showToast("Error", "Please! Upload only image file");
      }

      var reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = function () {
        post.image = reader.result;
        posts.unshift(post);

        localStorage.setItem("posts", JSON.stringify(posts));

        renderPostHtml(post);
        showToast("Success", "Post created");
        postContentElem.value = "";
        postImageElem.value = "";
      };
    } else if (postContentElem.value) {
      posts.unshift(post);

      localStorage.setItem("posts", JSON.stringify(posts));

      renderPostHtml(post);
      showToast("Success", "Post created");
      postContentElem.value = "";
      postImageElem.value = "";
    }
  } else {
    showToast("Error", "Please! Upload post content or image");
  }
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function renderPostHtml(params, insertHtmlPosition = "afterbegin") {
  params.date = new Date(params.date);
  var html = "<div class='col-12 mb-3'>";
  html += "<div class='card shadow-sm border-0'>";

  html += "<div class='card-body'>";

  html += "<div class='author d-flex align-items-center'>";
  html += "<div class='me-2'>";
  html += "<img src='" + user.image + "' alt='avatar' class='avatar' />";
  html += "</div>";

  html += "<div>";
  html += "<h6 class='mb-0'>" + user.name + "</h6>";

  html += "<p class='mb-0 text-muted small'>";
  html +=
    "<span>" +
    params.date.toDateString() +
    "</span> at <span> " +
    formatAMPM(params.date) +
    " </span>";
  html += "</p>";

  html += "</div>";

  html += "</div>";

  if (params.content) {
    html += "<p class='card-text mt-2'>";
    html += params.content;
    html += "</p>";
  }

  html += "</div>";
  if (params.image) {
    html +=
      "<img src='" +
      params.image +
      "' class='card-img-bottom' alt='post image' />";
  }

  html += "</div>";
  html += "</div>";

  postsListingRowElem.insertAdjacentHTML(insertHtmlPosition, html);
}

function renderPosts() {
  for (var i = 0; i < posts.length; i++) {
    renderPostHtml(posts[i], "beforeend");
  }
}

function showToast(headerText, bodyText) {
  toastHeaderElem.innerHTML = headerText;
  toastBodyElem.innerHTML = bodyText;
  toast.show();
}

function uploadUserProfileImage(image) {
  userProfileImageElem.src = image;
  userProfileImageElem.classList.remove("d-none");
  userProfileImageElem.classList.add("profile-image");

  userProfileElem.classList.add("d-none");
  userProfileLabelElem.classList.add("d-none");
}

function uploadAvatarImage(image) {
  avatarElem.src = image;
}

function uploadImage(image) {
  uploadUserProfileImage(image);
  uploadAvatarImage(image);
}

function isVaidImage(imageName) {
  return !!imageName.match(/\.(jpg|jpeg|png|gif|ico)$/);
}

function disableUserInfoForm() {
  userNameElem.disabled = true;
  userProfileElem.disabled = true;
  userSaveElem.disabled = true;
}

function enableWritePostButton() {
  writePostButtonElem.disabled = false;
}
