document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => renderBooks(books));
}

function renderBooks(items) {
  const main = document.querySelector("main");
  items.forEach((item) => {
    const h2 = document.createElement("h2");
    h2.textContent = item.name;
    main.appendChild(h2);
  });
}
