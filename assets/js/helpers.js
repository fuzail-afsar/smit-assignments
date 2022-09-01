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
