

let createTodo = () => {
  event.preventDefault();
  let elementId = id();
  let todo = document.createElement("div");
  todo.setAttribute("id", elementId);
  let todoText = document.getElementById("todoText").value;
  let text = document.createTextNode(todoText);
  let button = document.createElement("button");
  button.setAttribute("id", id());
  button.setAttribute("onclick", "handleTodo("+elementId+")");

  let buttonText = document.createTextNode("remove todo");
  button.appendChild(buttonText);

  todo.appendChild(text);
  todo.appendChild(button);

  let list = document.getElementById("todoList");
  list.appendChild(todo);
}

let handleTodo = (toRemove) => {
  toRemove.remove();
}

let id = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}