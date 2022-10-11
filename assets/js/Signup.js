const form = document.getElementsByTagName("form")[0];

class Signup extends Main {
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
      const data = {};
      const [...formFields] = event.target;
      formFields.pop();
      formFields.forEach(({ name, value }) => {
        data[name] = value;
      });

      await this._fireBase.signUp(data);
      window.location.assign("profile.html");
    } catch (error) {
      console.log(error);
    } finally {
      this._hideLoader();
    }
  }
}
(() => new Signup())();
