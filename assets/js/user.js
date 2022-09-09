function User() {
  function User() {}
  User.prototype = (function () {
    var Users = getUsersFromDB();

    function setUsersInDB(value) {
      localStorage.setItem("isLoggedIn", value);
    }

    function loggedIn() {
      setUsersInDB(true);
    }

    function loggedOut() {
      setUsersInDB("");
    }

    function getUsersFromDB() {
      return localStorage.getItem("isLoggedIn");
    }
    return {
      loggedIn: loggedIn,
      loggedOut: loggedOut,
      isLoggedIn: getUsersFromDB,
    };
  })();
  return new User();
}
