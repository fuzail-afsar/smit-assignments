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
          <div class="toast-container position-fixed bottom-0 end-0 p-3">
              <div
              id="toast"
              class="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              >
              <div class="toast-header">
                  <strong class="me-auto"></strong>
                  <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  ></button>
              </div>
              <div class="toast-body"></div>
              </div>
          </div>
          `;
    }

    function show(headerText, bodyText) {
      var toastElem = document.getElementById("toast");
      var toastHeaderElem = toastElem.querySelector(".toast-header strong");
      var toastBodyElem = toastElem.querySelector(".toast-body");
      var toast = new bootstrap.Toast(toastElem);

      toastHeaderElem.innerHTML = headerText;
      toastBodyElem.innerHTML = bodyText;
      toast.show();
    }

    return {
      init: init,
      show: show,
    };
  })();
  return new Toast();
}
