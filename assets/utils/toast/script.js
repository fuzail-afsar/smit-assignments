function Toast() {
  var mainElem = document.getElementsByTagName("main")[0];

  function Toast() {}

  Toast.prototype = (function () {
    function init() {
      renderToastHtml();
    }

    function renderToastHtml() {
      mainElem.insertAdjacentHTML("afterend", toastHtml());
    }

    function toastHtml() {
      return `
        <div class="toast">
            <div class="toast-content">
            <h3 class="toast-title">Success</h3>
            <span class="toast-message">Your changes has been saved</span>
            </div>
        </div>
          `;
    }

    function show(headerText, bodyText) {
      var toastElem = document.querySelector(".toast");
      var toastHeaderElem = toastElem.querySelector(".toast-title");
      var toastMessageElem = toastElem.querySelector(".toast-message");

      toastHeaderElem.innerHTML = headerText;
      toastMessageElem.innerHTML = bodyText;

      toastElem.classList.add("active");

      setTimeout(function () {
        toastElem.classList.remove("active");
      }, 5000); //1s = 1000 milliseconds
    }

    return {
      init: init,
      show: show,
    };
  })();
  return new Toast();
}
