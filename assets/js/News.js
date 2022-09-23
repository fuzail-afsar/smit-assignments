const newsHeadingElem = document.getElementsByTagName("h1")[0];
const newsRowElem = document.getElementsByClassName("news-headlines-row")[0];

class News extends Main {
  #title;
  #newsApi = new NewsApi();

  constructor() {
    super();
    this.#init();
  }

  #init() {
    this.#validatePage();
    this.#setTitle();
    this.#setActiveLink();
    this.#renderCategoryNews();
  }

  #validatePage() {
    this.#hasCategoryParam() || window.location.assign("./index.html");
  }

  #setTitle() {
    this.#title = this.#hasCategoryParam();
    this.#renderCategoryTitle(this.#title);
  }

  #setActiveLink() {
    document.getElementsByClassName(this.#title)[0].classList.add("active");
  }

  #renderCategoryTitle(title) {
    newsHeadingElem.innerHTML = title[0].toUpperCase() + title.slice(1);
  }

  #hasCategoryParam() {
    const params = this._getParams();
    if (!("category" in params)) return false;
    return params.category;
  }

  async #renderCategoryNews() {
    try {
      const data = await this.#newsApi.getNews({ category: this.#title });
      if (!data.articles.length) throw new Error("No news in " + this.#title);
      newsRowElem.innerHTML = this.#generateNewsHtml(data.articles);
    } catch (error) {
      newsRowElem.innerHTML = this._errorHtml(error.message);
    }
  }

  #generateNewsHtml(data) {
    let html = "";
    data.forEach(({ title, url, urlToImage, description }) => {
      html += `<div class="col-sm-6 col-md-4">`;
      html += this._newsCardHtml({
        title: this._controlTextLength(title, 65),
        url,
        imageUrl: urlToImage,
        description: this._controlTextLength(description, 185),
      });
      html += `</div>`;
    });
    return html;
  }
}

(function () {
  new News();
})();
