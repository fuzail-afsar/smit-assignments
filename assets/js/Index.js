const userFullnameElem = document.getElementsByClassName("user-fullname")[0];
class Index extends Main {
  constructor() {
    super();
    this.#init();
  }
  async #init() {
    await this._init();
    userFullnameElem.innerHTML = this._fireBase.getUserProfile().displayName;
  }
}
(() => new Index())();
