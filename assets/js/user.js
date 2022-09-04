function User() {
  function User() {}
  User.prototype = (function () {
    var users = getUsersFromDB();

    function getUsersFromDB() {
      return JSON.parse(localStorage.getItem("users")) || [];
    }

    function setUsersInDB(users) {
      localStorage.setItem("users", JSON.stringify(users));
    }

    function add(username, email, password) {
      var loggedInUser = { username, email, password };
      setLoggedInUserInDB({ username, email });
      users.push(loggedInUser);
      setUsersInDB(users);
    }

    function isUserExist(username) {
      for (var i = 0; i < users.length; i++) {
        if (username === users[i].username) return true;
      }
      return false;
    }

    function matchCredentials(username, password) {
      for (var i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password)
          return users[i];
      }
      return false;
    }

    function setLoggedInUserInDB(userInfo) {
      localStorage.setItem("loggedInUser", JSON.stringify(userInfo));
    }

    function getLoggedInUserFromDB() {
      return JSON.parse(localStorage.getItem("loggedInUser"));
    }

    function isLoggedIn() {
      if (getLoggedInUserFromDB()) return true;
      return false;
    }

    function signOutUser() {
      setLoggedInUserInDB("");
      window.location.assign("signin.html");
    }
    return {
      add: add,
      isUserExist: isUserExist,
      matchUserCredentials: matchCredentials,
      getLoggedInUser: getLoggedInUserFromDB,
      setLoggedInUser: setLoggedInUserInDB,
      isLoggedIn: isLoggedIn,
      signOutUser: signOutUser,
    };
  })();
  return new User();
}
