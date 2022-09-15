class Main {
  constructor() {
    this.#init();
  }

  #init() {
    this.#initEvents();
  }

  #initEvents() {
    window.addEventListener("load", this.hideLoader());
  }

  showLoader() {
    document
      .getElementsByClassName("loader")[0]
      .classList.remove("invisible", "d-none");
  }

  hideLoader() {
    setTimeout(function () {
      document
        .getElementsByClassName("loader")[0]
        .classList.add("invisible", "d-none");
    }, 1000);
  }
}
