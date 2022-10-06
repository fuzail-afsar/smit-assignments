class Helper {
  _controlTextLength(str, length = 20) {
    if (str.length > length) {
      return str.slice(0, length + 1) + "...";
    }
    return str;
  }

  _getParams() {
    return Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );
  }

  _testImage(url) {
    return new Promise((resolve, reject) => {
      // Create the image
      const imgElement = new Image();

      // When image is loaded, resolve the promise
      imgElement.addEventListener("load", function imgOnLoad() {
        resolve(this);
      });

      // When there's an error during load, reject the promise
      imgElement.addEventListener("error", function imgOnError() {
        reject("Image not found");
      });

      // Assign URL
      imgElement.src = url;
    });
  }
}
