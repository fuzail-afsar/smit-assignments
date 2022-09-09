function functions() {
  function init() {
    initPrototypes();
  }

  function initPrototypes() {
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

  function getParams() {
    return Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );
  }
  return {
    init: init,
    getParams: getParams,
  };
}
functions().init();
