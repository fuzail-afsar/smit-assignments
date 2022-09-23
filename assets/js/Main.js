const year = document.getElementById("year");
class Main extends Helper {
  _placeholderImage = "./assets/images/placeholder.jpg";
  constructor() {
    super();
    this.#init();
  }

  #init() {
    this._setFooterYear();
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
    setTimeout(function () {
      document
        .getElementsByClassName("loader")[0]
        .classList.add("invisible", "d-none");
    }, time);
  }

  // _controlTextLength(str, length = 20) {
  //   if (str.length > length) {
  //     return str.slice(0, length + 1) + "...";
  //   }
  //   return str;
  // }

  _setFooterYear() {
    if (year) {
      year.innerHTML = new Date().getFullYear();
    }
  }

  _imageOverlayCardHtml(data) {
    return `
    <a href="${data.url}" target="_blank" class="image-overlay">
      <img
        src="${data.imageUrl || this._placeholderImage}"
        alt="${data.title}"
      />
      <div class="content">
        <h4>${data.title}</h4>
      </div>
    </a>
    `;
  }

  _newsCardHtml(data) {
    return `
      <div class="card border-0">
        <a href="${data.url}" target="_blank">
          <img
            src="${data.imageUrl || this._placeholderImage}"
            class="card-img"
            alt="${data.title}"
          />
        </a>

        <div class="card-body px-0">
          <h5 class="card-title">
            <a href="${
              data.url
            }" target="_blank" class="text-decoration-none">${data.title}</a>
          </h5>
          ${
            data.description
              ? '<p class="card-text">' + data.description + "</p>"
              : ""
          }
        </div>
      </div>
    `;
  }

  _errorHtml(message = "Something went wrong!") {
    return `
      <div class="col-12">
        <p>${message}</p>
      </div>
    `;
  }

  // _getParams() {
  //   return Object.fromEntries(
  //     new URLSearchParams(window.location.search).entries()
  //   );
  // }
}
