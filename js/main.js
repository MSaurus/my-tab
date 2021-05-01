import {loadTodos} from './todo.js'
import {showTime} from './clock.js'
import {isUsernameSet,loadUsername} from './userGreeting.js'
import { loadQuote } from './quote.js';

// so that we can use anywhere, will be used for pretty much everything
export let storage = window.localStorage;

document.addEventListener("DOMContentLoaded", function() {
  loadTodos();
  showTime();

  if (isUsernameSet()) {
    loadUsername()
  } else {
    let usernameElement = document.querySelector(".username h1 span")
    usernameElement.textContent = "CHANGE ME"
    usernameForm.removeAttribute("hidden")
  }

  loadQuote();
});
