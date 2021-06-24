import {storage} from './main.js'
import {fixContrast, rgbList} from './changeColor.js'

export let loadTodos = () => {

  storage.get().then(object => {
    let todos = [];
    for (let i in Object.keys(object)) {
      if(Object.keys(object)[i].substr(0, 1) === '_') {
        todos.push(Object.entries(object)[i]);
      }
    }
    
    todos.forEach(todo => {
      let elementId = todo[0];
      let todoText = todo[1];
      createTodoElement(elementId, todoText)
    })
  })
}

let createTodo = event => {
  // prevent reload
  event.preventDefault(); 
  
  // creates a unique id that will be used later to remove the elemnt when the todo is done
  let elementId = id();
  let todoText = document.getElementById("todoText");
  let errorMsg = document.getElementById("todoErrorText");
  
  if(todoText.value === ""){
    addErrorClasses(todoText, errorMsg)
  }else{
    errorMsg.classList.add("hidden")
    todoText.classList.remove("error")
    
    createTodoElement(elementId, todoText.value);
    storage.set({
      [elementId]: todoText.value
    });

    // TODO: Rework this part
    // makes the new todo also follow the contrast
    storage.get("backgroundColor", object => {
      if (object.backgroundColor !== null) {
        let backgroundColor = document.body.style.backgroundColor;
        backgroundColor = rgbList(backgroundColor);
        for (let i = 0; i < 3; i++) {
          backgroundColor[i] = parseInt(backgroundColor[i]);
        }
        fixContrast(backgroundColor);
      }
    })
    // if (storage.getItem("backgroundColor") !== null) {
    //   let backgroundColor = document.body.style.backgroundColor;
    //   backgroundColor = rgbList(backgroundColor);
    //   for(let i = 0; i < 3; i++) {
    //     backgroundColor[i] = parseInt(backgroundColor[i]);
    //   }
    //   fixContrast(backgroundColor);
    // }
  }
  
  // reset form (empty the input text)
  document.getElementById("todoForm").reset();
}

let addErrorClasses = (todoText, errorMsg) => {
  errorMsg.classList.remove("hidden");
  todoText.classList.add("error")

  errorMsg.classList.add("bounce");
  todoText.classList.add("bounce")
  setTimeout(function() {
    //remove the class so animation can occur as many times as user triggers event, delay must be longer than the animation duration and any delay.
    errorMsg.classList.remove("bounce");
    todoText.classList.remove("bounce");
  }, 1000); 
}

let removeTodo = (divId) => {
  let divToRemove = document.getElementById(divId)
  divToRemove.remove()
  storage.remove(divToRemove.id);
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

  let backgroundColor = "";
  storage.get("backgroundColor", object => {
    if(object.backgroundColor !== null) {
      backgroundColor = object.backgroundColor;
      todo.style.backgroundColor = backgroundColor;
      button.style.backgroundColor = backgroundColor;
    }
  })

  let list = document.getElementById("items");
  list.appendChild(todo);
}
