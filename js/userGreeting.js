import {storage} from './main.js'

let usernameForm = document.querySelector("#usernameForm")

export let isUsernameSet = () => {
  let username = storage.get("username", user => {
    return user ? true : false
  });
  return username
}

export let loadUsername = () => {
  let usernameElement = document.querySelector(".username h1 span")
  storage.get("username", usernameInStorage => {
    usernameElement.textContent = `${usernameInStorage}`;
  });
}


/* fires when you press enter on the input
** it gets the name you put in, saves it
** in localstorage and the change the name
** on screen
*/
let setUsername = event => {
  event.preventDefault()
  let newUsernameInput = document.querySelector("#newUsername")
  if (newUsername.value !== "") {
    storage.set({
      username: newUsername.value
    })
    let usernameElement = document.querySelector(".username h1 span")
    usernameElement.textContent = `${newUsername.value}`
    newUsernameInput.value = ""
  }
  usernameForm.setAttribute("hidden", "")
}

usernameForm.addEventListener("submit", setUsername)

let showInputField = () => {
  usernameForm.removeAttribute("hidden")
}

let nameElement = document.querySelector(".username h1 span")
nameElement.addEventListener("dblclick", showInputField)
