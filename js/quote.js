import {storage} from './main.js'


export let loadQuote = () => {
  if (storage.getItem("quoteIndex") === null) {
    storage.setItem("quoteIndex", 0);
  }

  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let quoteText = document.getElementById("quoteText");
    let quoteAuthor = document.getElementById("quoteAuthor");
    let index = parseInt(storage.getItem("quoteIndex"));

    console.log(data[index]);
    quoteText.textContent = "''" + data[index].text + "''"
    quoteAuthor.textContent = "— " + data[index].author
    storage.setItem("quoteIndex", index + 1)
  });

}

