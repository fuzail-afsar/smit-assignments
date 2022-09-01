function Result() {
  function Result() {}
  Result.prototype = (function () {
    function setResultsInDB(result) {
      localStorage.setItem("results", JSON.stringify(result));
    }

    function getResultsFromDB() {
      return JSON.parse(localStorage.getItem("results"));
    }

    function addUserResult(username, quizName, percentage) {
      var results = getResultsFromDB() || {};
      quizName = quizName.split(" ").join("_");

      if (username in results) {
        results[username][quizName] = percentage;
      } else {
        results[username] = {
          [quizName]: percentage,
        };
      }
      setResultsInDB(results);
    }

    function getUserResult(username) {
      var results = getResultsFromDB() || {};
      return results[username];
    }
    return {
      addUserResult: addUserResult,
      getUserResult: getUserResult,
    };
  })();
  return new Result();
}
