const generalNewsRowElem =
  document.getElementsByClassName("general-news-row")[0];
const sportsNewsRowElem = document.getElementsByClassName(
  "sports-headlines-row"
)[0];
const businessNewsRowElem = document.getElementsByClassName(
  "business-headlines-row"
)[0];
const healthNewsRowElem = document.getElementsByClassName(
  "health-headlines-row"
)[0];

class Index extends Main {
  #newsApi = new NewsApi();
  constructor() {
    super();
    this.#init();
  }
  #init() {
    this.#initAllNews();
  }

  async #initAllNews() {
    try {
      const headlineSelectors = [
        sportsNewsRowElem,
        businessNewsRowElem,
        healthNewsRowElem,
      ];

      const [generalNews, ...headlines] = await Promise.allSettled([
        this.#newsApi.getNews({
          pageSize: 5,
          category: "general",
        }),
        this.#requestHeadlines("sports"),
        this.#requestHeadlines("business"),
        this.#requestHeadlines("health"),
      ]);

      if (
        generalNews.status === "fulfilled" &&
        generalNews.value.articles.length
      ) {
        generalNewsRowElem.innerHTML = this.#generateGeneralNewsHtml(
          generalNews.value.articles
        );
      }

      headlines.forEach(({ status, value }, index) => {
        if (status === "fulfilled" && value.articles.length) {
          headlineSelectors[index].innerHTML = this.#generateHeadlinesHtml(
            value.articles
          );
        } else {
          console.log(status, value);
          headlineSelectors[index].innerHTML = this._errorHtml(
            "No news found in this category"
          );
        }
      });
    } catch (error) {
      console.warn(error);
    }
  }

  // Headlines
  #requestHeadlines(category) {
    return this.#newsApi.getNews({
      pageSize: 3,
      category,
    });
  }

  #generateGeneralNewsHtml(data) {
    let html = "";
    data.forEach(({ title, url, urlToImage }, index, arr) => {
      if (!index) {
        html += `
        <div class="col-sm-12 col-md-6 image-wrapper-lg">
          ${this._imageOverlayCardHtml({
            title: this._controlTextLength(title, 60),
            url,
            imageUrl: urlToImage,
          })}
        </div>
        `;
      }
      if (index === 1) {
        html += `
        <div class="col-sm-12 col-md-6">
          <div class="row general-news-sm-row g-2">
        `;
      }

      if (index > 0) {
        html += `<div class="col-sm-6">`;
        html += this._imageOverlayCardHtml({
          title: this._controlTextLength(title),
          url,
          imageUrl: urlToImage,
        });
        html += `</div>`;
      }

      if (index === arr.length - 1) {
        html += `</div></div>`;
      }
    });
    return html;
  }

  #generateHeadlinesHtml(data) {
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
  new Index();
})();
