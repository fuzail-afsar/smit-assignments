function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// Get all users from local storage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Add user to local storage
function addUser(username, email, password) {
  var users = getUsers();
  var user = new User(username, email, password);
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return user;
}

function isUserExist(username) {
  var users = getUsers();
  for (var i = 0; i < users.length; i++) {
    if (username === users[i].username) return true;
  }
  return false;
}

function matchUserCredentials(username, password) {
  var users = getUsers();
  for (var i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password)
      return users[i];
  }
  return false;
}

function setLoggedInUser(userInfo) {
  localStorage.setItem("loggedInUser", JSON.stringify(userInfo));
}

function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

function isLoggedIn() {
  if (getLoggedInUser()) return true;
  return false;
}

function signOutUser() {
  setLoggedInUser("");
  window.location.assign("signin.html");
}

function authorizePages() {
  if (
    window.location.pathname.lastIndexOf("signin.html") !== -1 ||
    window.location.pathname.lastIndexOf("signup.html") !== -1
  ) {
    if (isLoggedIn()) window.location.assign("index.html");
  } else if (!isLoggedIn()) window.location.assign("signin.html");
}

function setQuiz(quiz) {
  sessionStorage.setItem("quiz", JSON.stringify(quiz));
}

function getQuiz() {
  return JSON.parse(sessionStorage.getItem("quiz"));
}

function setResults(result) {
  localStorage.setItem("results", JSON.stringify(result));
}

function getResults() {
  return JSON.parse(localStorage.getItem("results"));
}

function setUserResult(username, quizName, percentage) {
  var results = getResults() || {};
  quizName = quizName.split(" ").join("_");

  if (username in results) {
    results[username][quizName] = percentage;
  } else {
    results[username] = {
      [quizName]: percentage,
    };
  }
  setResults(results);
}

function getUserResult(username) {
  var results = getResults() || {};
  return results[username];
}

function isPageReloaded() {
  if (window.performance.getEntriesByType("navigation")[0].type === "reload")
    return true;
  return false;
}

// Time
function timer(time, runAfter = 1000, callback) {
  var intervalId = setInterval(function () {
    if (callback && typeof callback === "function") {
      if (!callback(time)) clearInterval(intervalId);
    }
    if (time <= 0) clearInterval(intervalId);
    time--;
  }, runAfter);
}

function secToHours(sec) {
  return Math.floor(sec / (60 * 60));
}

function secToMins(sec) {
  return Math.floor(sec / 60);
}

function secToHourMinutesSeconds(sec) {
  var hours = secToHours(sec);
  sec %= 60 * 60;
  var mins = secToMins(sec);
  sec %= 60;
  return { hours, mins, sec };
}

Array.prototype.shuffle = function () {
  for (var i = 0; i < this.length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};
