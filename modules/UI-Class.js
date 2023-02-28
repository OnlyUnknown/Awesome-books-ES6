import Book from './BookClass.js';
import store from './storage.js';

export default class UI {
  static displayBooks() {
    const books = store.getBook();

    books.forEach((book) => UI.addBook(book));
  }

  static addBook(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td><a href="#" class="Remove">Remove</a></td>
   `;

    list.appendChild(row);
  }

  static delete(el) {
    if (el.classList.contains('Remove')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clear() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title === '' || author === '') {
    e.preventDefault();
  } else {
    const book = new Book(title, author);
    store.addBook(book);

    UI.addBook(book);

    UI.clear();
  }
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.delete(e.target);
  store.removebook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent,
    e.target.parentElement.previousElementSibling.textContent);
});