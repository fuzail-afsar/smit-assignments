const userProfileElem = document.getElementById("user-profile");
const firstNameElem = userProfileElem.getElementsByClassName("first-name")[0];
const lastNameElem = userProfileElem.getElementsByClassName("last-name")[0];
const emailElem = userProfileElem.getElementsByClassName("email")[0];
const phoneElem = userProfileElem.getElementsByClassName("phone")[0];

class Profile extends Main {
  constructor() {
    super();
    this.#init();
  }
  async #init() {
    await this._init();
    this.#renderUserProfileInDom();
  }

  async #renderUserProfileInDom() {
    try {
      const { email, firstName, lastName, phone } =
        await this._fireBase.getUser();

      firstNameElem.innerHTML = firstName;
      lastNameElem.innerHTML = lastName;
      emailElem.innerHTML = email;
      phoneElem.innerHTML = phone;
    } catch (error) {
      console.warn(error);
    }
  }
}
(() => new Profile())();
