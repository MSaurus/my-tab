import {loadTodos} from './todo.js'
import {showTime} from './clock.js'
import {isUsernameSet,loadUsername} from './userGreeting.js'
import {loadBackgroundColor} from './changeColor.js'

// so that we can use anywhere, will be used for pretty much everything
export let storage = browser.storage.local;

document.addEventListener("DOMContentLoaded", function() {
  loadTodos();
  showTime();
  loadBackgroundColor();

  if (isUsernameSet()) {
    loadUsername()
  } else {
    let usernameElement = document.querySelector(".username h1 span")
    usernameElement.textContent = "CHANGE ME"
    usernameForm.removeAttribute("hidden")
  }
});

let errorMsg = document.getElementById("todoErrorText");
errorMsg.classList.add("hidden");