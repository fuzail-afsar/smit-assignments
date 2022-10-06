class Main {
  _placeholderImage = "./assets/images/placeholder.jpg";
  constructor() {
    // super();
    this.#init();
  }

  #init() {
    this.#initEvents();
  }

  #initEvents() {
    window.addEventListener("load", this._hideLoader());
  }

  _showLoader() {
    document
      .getElementsByClassName("loader")[0]
      .classList.remove("invisible", "d-none");
  }

  _hideLoader(time = 1000) {
    const loader = document.getElementsByClassName("loader")[0];
    if (loader)
      setTimeout(function () {
        loader.classList.add("invisible", "d-none");
      }, time);
  }
}
(() => new Main())();
