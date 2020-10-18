
// so that we can use anywhere, will be used for pretty much everything
let storage = window.localStorage;

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


document.addEventListener("DOMContentLoaded", function() {
  loadLocalstorage();
});

let loadLocalstorage = () => {
  for(let i = 0; i < storage.length; i++){
    let elementId = storage.key(i);
    let todoText = storage.getItem(elementId);
    createTodoElement(elementId, todoText);
  }
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
