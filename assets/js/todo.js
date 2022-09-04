function Todo(userName) {
  function Todo() {
    this.todo = this.__proto__.get(userName);
  }

  Todo.prototype = (function () {
    function add(data) {
      this.todo.push(data);
      setTodos(this.todo);
    }

    function deleteTodo(index) {
      this.todo.splice(index, 1);
      setTodos(this.todo);
    }

    function editTitle(index, title) {
      this.todo[index].todo = title;
      setTodos(this.todo);
    }

    function editTodoState(index, state) {
      this.todo[index].completed = state;
      setTodos(this.todo);
    }

    function getTodosOfUser(userName) {
      var allTodos = getTodosFromDB();
      return allTodos[userName] || [];
    }

    function setTodos(todos) {
      var allTodos = getTodosFromDB();
      allTodos[userName] = todos;
      setTodosInDB(allTodos);
    }

    function setTodosInDB(todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    function getTodosFromDB() {
      return JSON.parse(localStorage.getItem("todos")) || {};
    }

    return {
      add: add,
      get: getTodosOfUser,
      editTitle: editTitle,
      editTodoState: editTodoState,
      delete: deleteTodo,
    };
  })();
  return new Todo();
}
