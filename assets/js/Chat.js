const userFullnameElem = document.getElementsByClassName("user-fullname")[0];
const userEmailElem = document.getElementsByClassName("user-email")[0];

const contactSidebarElem = document.getElementById("contacts-sidebar");
const contactListElem =
  contactSidebarElem.getElementsByClassName("contact-list")[0];

const startChatPanelElem = document.getElementById("start-chat-panel");
const userChatPanelElem = document.getElementById("user-chat-panel");
const chatElem = userChatPanelElem.querySelector("#chats");

const sendMessageFormElem = document.getElementById("send-message");

class Chat extends Main {
  #receiverId;
  constructor() {
    super();
    this.#init();
  }
  async #init() {
    await this._init();
    this.#initEvents();
    this.#renderUserInfoInDom();
    this.#renderUsersInDom();
  }

  #initEvents() {
    contactListElem.addEventListener(
      "click",
      this.#contactListClickHandler.bind(this)
    );
    sendMessageFormElem.addEventListener(
      "submit",
      this.#sendMessageSubmitHandler.bind(this)
    );
  }

  #renderUserInfoInDom() {
    const { email, displayName } = this._fireBase.getUserProfile();
    userFullnameElem.innerHTML = displayName;
    userEmailElem.innerHTML = email;
  }

  async #renderUsersInDom() {
    try {
      const users = await this._fireBase.getUsers();
      let html = "";
      users.forEach((user) => {
        html += this.#contactListItemHtml(user);
      });
      contactListElem.innerHTML = html;
    } catch (error) {
      console.warn(error);
      contactListElem.innerHTML = `<span class="">${error.message}</span>`;
    }
  }

  #contactListItemHtml({ id, firstName, lastName }) {
    return `
      <li class="px-3 py-2 contact" id="${id}">
        <span class="avatar me-2">${firstName[0]}</span>
        <span class="name fw-semibold">${firstName} ${lastName}</span>
      </li>
    `;
  }

  // Handlers
  #contactListClickHandler(event) {
    const element = event.target.closest(".contact");
    if (!element) return;
    this.#receiverId = element.id;

    const receiverNameElem = userChatPanelElem.querySelector(".chating-user");
    receiverNameElem.innerHTML =
      element.getElementsByClassName("name")[0].innerText;

    userChatPanelElem.classList.remove("d-none");
    startChatPanelElem.classList.add("d-none");

    this._fireBase.getChat(this.#receiverId, (chats) => {
      let html = "";
      chats.forEach((chat) => (html += this.#chatListItemHtml(chat)));
      chatElem.innerHTML = html;
    });
  }

  #sendMessageSubmitHandler(event) {
    try {
      event.preventDefault();
      const email = event.target[0];
      const emailValue = email.value.trim();
      if (!emailValue) return;
      if (!this.#receiverId) return;
      this._fireBase.sendMessage(this.#receiverId, emailValue);
      email.value = "";
    } catch (error) {
      console.warn(error);
    }
  }

  #chatListItemHtml(data) {
    const { senderId, message } = data;
    return `
      <li class="message ${
        senderId === this._fireBase.getUserProfile().uid
          ? "user-message"
          : "contact-message"
      }">
        <img
          src="./assets/images/placeholder.jpg"
          alt=""
          class="avatar avatar-chat"
        />
        <div class="bg-secondary rounded p-2">
          <p class="mb-0">${message}</p>
        </div>
      </li>
    `;
  }
}
(() => new Chat())();
