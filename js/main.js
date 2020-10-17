

let createTodo = () => {
  // prevent reload
  event.preventDefault();
  
  // creates a unique id that will be used later to remove the elemnt when the todo is done
  let elementId = id();

  /*
    creates a div with a unique id
    add the text from the input field
    then creates a button that will call the function with the id wen clicked
  */
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


  // reset form (empty the input text)
  document.getElementById("todoForm").reset();
}

let handleTodo = (toRemove) => {
  toRemove.remove();
}

let id = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}