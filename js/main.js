// so that we can use anywhere, will be used for pretty much everything
let storage = window.localStorage;

document.addEventListener("DOMContentLoaded", function() {
  loadTodos();

  if (isUsernameSet()) {
    loadUsername()
  } else {
    let usernameElement = document.querySelector(".user-name")
    usernameElement.textContent = "Hello"
  }
});

let loadTodos = () => {
  let todos = []
  /* get all the items and remove the ones
  ** that are not todos
  */ 
  for(let i = 0; i < storage.length; i++) {
    if(storage.key(i).substr(0, 1) == '_') {
      todos.push(storage.key(i))
    }
  }
  
  // load the todos and only the todos
  for(let i = 0; i < todos.length; i++) {
    let elementId = todos[i]
    let todoText = storage.getItem(elementId)
    createTodoElement(elementId, todoText)
  }
}

let isUsernameSet = () => {
  return storage.getItem("username") ? true : false
}

let loadUsername = () => {
  let usernameElement = document.querySelector(".user-name")
  let usernameInStorage = storage.getItem("username")
  usernameElement.textContent = `Hello ${usernameInStorage}`
}

let createTodo = event => {
  // prevent reload
  event.preventDefault(); 
  
  // creates a unique id that will be used later to remove the elemnt when the todo is done
  let elementId = id();
  let todoText = document.getElementById("todoText").value;
  createTodoElement(elementId, todoText);
  storage.setItem(elementId, todoText);
  
  // reset form (empty the input text)
  document.getElementById("todoForm").reset();
}

let handleTodo = (toRemove) => {
  toRemove.remove();
  storage.removeItem(toRemove.id);
}

// Instead of onclick in html, add event listener to the form when submitting
document.getElementById("todoForm").addEventListener('submit', createTodo)

// this should be good, because the user will probably no create that many tasks
let id = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}


/*
  creates a div with a unique id
  add the text from the input field
  then creates a button that will call the function with the id wen clicked
*/
let createTodoElement = (elementId, todoText) => {

  let todo = document.createElement("div");
  todo.setAttribute("id", elementId);

  let text = document.createTextNode(todoText);
  let button = document.createElement("button");
  button.setAttribute("onclick", "handleTodo("+elementId+")");

  let buttonText = document.createTextNode("remove todo");
  button.appendChild(buttonText);

  todo.appendChild(text);
  todo.appendChild(button);

  let list = document.getElementById("todoList");
  list.appendChild(todo);
}
