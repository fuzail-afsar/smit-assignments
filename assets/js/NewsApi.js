class NewsApi {
  baseUrl = "https://newsapi.org/v2/";
  #getAppId() {
    const apis = [
      "e140c1ad3511432fa108cb81420848af",
      "20b83ddb27df44dfbf63293a03ddc242",
      "59cd4dd587774685963dc0e5a92035e5",
      "8a7df137cd1a4571a7f762e63e2653ee",
    ];
    const r = this.#getRandomNumber(0, 3);
    return apis[r];
  }

  #getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getParamsFromObject(obj) {
    return Object.keys(obj)
      .map((key) => key + "=" + obj[key])
      .join("&");
  }

  getNews(paramsObject = {}) {
    return new Promise((resolve, reject) => {
      if (!("language" in paramsObject)) {
        paramsObject.language = "en";
      }

      paramsObject.apiKey = this.#getAppId();
      fetch(
        `${this.baseUrl}top-headlines?${this.getParamsFromObject(paramsObject)}`
      )
        .then((res) => res.json())
        .then((resJson) => {
          if (resJson.status === "ok") resolve(resJson);

          reject(resJson);
        })
        .catch((err) => reject(err));
    });
  }
}
