function functions() {
  function init() {
    // initStringPrototypes();
    initDatePrototypes();
  }

  function initStringPrototypes() {
    String.prototype.toCamelCase = function (separator = " ") {
      var newKey = "";
      for (var i = 0; i < this.length; i++) {
        if (this[i] === separator) {
          newKey += this[i + 1].toUpperCase();
          i++;
          continue;
        }
        newKey += this[i];
      }
      return newKey;
    };
    String.prototype.camelCaseToKebabCase = function () {
      var newKey = "";
      for (var i = 0; i < this.length; i++) {
        var char = this[i];
        var upperCaseChar = this[i].toUpperCase();
        newKey += char === upperCaseChar ? "-" + char.toLowerCase() : char;
      }
      return newKey;
    };
  }

  function initDatePrototypes() {
    Date.prototype.getWeekDayName = function () {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return days[this.getDay()];
    };

    Date.prototype.getMonthName = function () {
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[this.getMonth()];
    };
  }

  return {
    init,
  };
}
functions().init();
