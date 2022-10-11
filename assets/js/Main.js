const userAvatarElems = document.getElementsByClassName("avatar-user");
const signOutUserElems = document.querySelectorAll(".signout-user");

class Main {
  _placeholderImage = "./assets/images/placeholder.jpg";
  _fireBase = new FireBase();

  async _init() {
    await this.#authorizePages();
    this.#initAvatar();
    this.#initEvents();
  }

  #initEvents() {
    window.addEventListener("load", this._hideLoader());
    this.#signOutUser();
  }

  #signOutUser() {
    signOutUserElems.forEach((element) => {
      element.addEventListener("click", this.#signOutHandler.bind(this));
    });
  }

  async #authorizePages() {
    try {
      let isLoggedIn = await this._fireBase.isLoggedIn();
      if (isLoggedIn) {
        if (
          window.location.pathname === "/signin.html" ||
          window.location.pathname === "/signup.html"
        ) {
          window.location.assign("index.html");
        }
      }
    } catch (error) {
      console.warn(error);
      if (
        window.location.pathname !== "/signin.html" &&
        window.location.pathname !== "/signup.html"
      ) {
        window.location.assign("signin.html");
      }
    }
  }

  #initAvatar() {
    const userAvatarElemLength = userAvatarElems.length;
    if (userAvatarElems && userAvatarElemLength > 0) {
      for (let i = 0; i < userAvatarElemLength; i++) {
        const element = userAvatarElems[i];
        element.innerHTML = this._fireBase.getUserProfile().displayName[0];
      }
    }
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

  // Handlers
  async #signOutHandler() {
    await this._fireBase.signOutUser();
    window.location.assign("signin.html");
  }
}
