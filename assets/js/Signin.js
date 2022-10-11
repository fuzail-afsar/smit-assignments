const form = document.getElementsByTagName("form")[0];

class Signin extends Main {
  #formValidation = new FormValidation(form);
  constructor() {
    super();
    this.#init();
  }

  async #init() {
    await this._init();
    this.#initEvents();
  }

  #initEvents() {
    form.addEventListener("submit", this.#formSubmitHandler.bind(this));
  }

  //   Handlers
  async #formSubmitHandler(event) {
    if (!this.#formValidation.isValidated()) return;
    try {
      this._showLoader();
      const [email, password] = event.target;
      await this._fireBase.signIn(email.value, password.value);
      window.location.assign("index.html");
    } catch (error) {
      console.log(error);
      console.log(error.message);
    } finally {
      this._hideLoader();
    }
  }
}
(() => new Signin())();
