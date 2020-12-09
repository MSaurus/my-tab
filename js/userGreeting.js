import {storage} from './main.js'

let usernameForm = document.querySelector("#usernameForm")

export let isUsernameSet = () => {
  return storage.getItem("username") ? true : false
}



export let loadUsername = () => {
  let usernameElement = document.querySelector(".username h1 span")
  let usernameInStorage = storage.getItem("username")
  usernameElement.textContent = `${usernameInStorage}`
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
    storage.setItem("username", newUsername.value)
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
