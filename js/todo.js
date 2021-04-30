import {storage} from './main.js'

export let loadTodos = () => {
  let todos = []
  /* get all the items and remove the ones
  ** that are not todos
  */ 
  for(let i = 0; i < storage.length; i++) {
    if(storage.key(i).substr(0, 1) === '_') {
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

let createTodo = event => {
  // prevent reload
  event.preventDefault(); 
  
  // creates a unique id that will be used later to remove the elemnt when the todo is done
  let elementId = id();
  let todoText = document.getElementById("todoText").value;

  let errorMsg = document.getElementById("todoErrorText");

  if(todoText === ""){
    errorMsg.classList.remove("hidden");
  }else{
    errorMsg.classList.add("hidden")
    createTodoElement(elementId, todoText);
    storage.setItem(elementId, todoText);
  }
  
  // reset form (empty the input text)
  document.getElementById("todoForm").reset();
}

let removeTodo = (divId) => {
  let divToRemove = document.getElementById(divId)
  divToRemove.remove()
  storage.removeItem(divToRemove.id);
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
  todo.setAttribute("class", "todo")

  let todoParagraph = document.createElement("p");
  let text = document.createTextNode(todoText);
  todoParagraph.appendChild(text);

  todoParagraph.setAttribute("class", "todo-text")

  let button = document.createElement("button");
  button.addEventListener('click', () => removeTodo(elementId));

  let buttonText = document.createTextNode("Complete");
  button.appendChild(buttonText);
  button.setAttribute("class", "action")

  todo.appendChild(todoParagraph);
  todo.appendChild(button);

  let list = document.getElementById("items");
  list.appendChild(todo);
}

