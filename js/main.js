import {loadTodos} from './todo.js'
import {showTime} from './clock.js'
import {loadUsername} from './userGreeting.js'
import {loadBackgroundColor} from './changeColor.js'

// so that we can use anywhere, will be used for pretty much everything
export let storage = browser.storage.local;

document.addEventListener("DOMContentLoaded", function() {
  loadTodos();
  showTime();
  loadBackgroundColor();
  loadUsername();
});

let errorMsg = document.getElementById("todoErrorText");
errorMsg.classList.add("hidden");