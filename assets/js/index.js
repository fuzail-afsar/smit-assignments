(function () {
  var formElem = document.getElementsByTagName("form")[0];
  var todoListElem = document.getElementsByTagName("ul")[0];
  var user = User();
  var todos = Todo(user.getLoggedInUser().username);
  var todo = todos.todo;

  // Functions
  function init() {
    renderTodos();
    // Events
    formElem.addEventListener("submit", formSubmitHandler);
    todoListElem.addEventListener("click", todoListClickHandler);
  }

  function renderTodos() {
    if (todo && todo.length) {
      for (var i = 0; i < todo.length; i++) {
        addTodoListItemInDOM(todo[i]);
      }
    }
  }

  function generateTodoListItemHtml(data) {
    return `
          <li>
              <label>
                  <input type="checkbox" value="${data.todo}" 
                  ${data.completed ? "checked" : ""}/>
                  <span>${data.todo}</span>
              </label>
              <button class="edit"></button>
              <button class="delete"></button>
          </li>
      `;
  }

  function addTodoListItemInDOM(data) {
    todoListElem.innerHTML += generateTodoListItemHtml(data);
  }

  // Handlers
  function formSubmitHandler(event) {
    event.preventDefault();
    var inputElem = event.target[0];
    var inputValue = inputElem.value;
    if (inputValue.trim() === "") return;
    todos.add({ todo: inputValue, completed: false });
    addTodoListItemInDOM({ todo: inputValue, completed: false });

    inputElem.value = "";
  }

  function todoEditHandler(event, index) {
    if (event.keyCode === 13) {
      var value = event.target.value;
      if (value.trim() === "") return;

      todos.editTitle(index, value);

      this.setAttribute("type", "checkbox");
      this.nextElementSibling.classList.remove("visibility-hidden", "d-none");
      this.nextElementSibling.innerHTML = value;
    }
  }

  function todoListClickHandler(event) {
    var element = event.target;
    if (element.nodeName !== "BUTTON" && element.nodeName !== "INPUT") return;

    var liElem =
      element.nodeName === "INPUT"
        ? element.parentNode.parentNode
        : element.parentNode;
    var index = Array.prototype.indexOf.call(this.children, liElem);

    switch (true) {
      case element.classList.contains("delete"):
        todos.delete(index);
        liElem.remove();
        return;
      case element.classList.contains("edit"):
        var inputElem = liElem.getElementsByTagName("input")[0];
        var spanElem = liElem.getElementsByTagName("span")[0];

        spanElem.classList.add("d-none", "visibility-hidden");
        inputElem.setAttribute("type", "text");

        inputElem.addEventListener("keyup", function (event) {
          todoEditHandler.call(this, event, index);
        });
        return;
      case element.getAttribute("type") === "checkbox":
        todos.editTodoState(index, element.checked);
        return;
      default:
        return;
    }
  }
  return init();
})();
