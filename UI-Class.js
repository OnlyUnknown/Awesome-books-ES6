import { store } from "./modules/storage.js";
class UI {
    static displayBooks() {
       const books = store.getBook();

   books.forEach((book) => UI.addBook(book))
}
static addBook(book) {
   const list = document.querySelector("#book-list")

   const row = document.createElement("tr");

   row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td><a href="#" class="Remove">Remove</a></td>
   `;

   list.appendChild(row);
}

static delete(el) {
   if(el.classList.contains('Remove')){
       el.parentElement.parentElement.remove();
   }
}

static clear() {
   document.querySelector("#title").value = "";
   document.querySelector("#author").value = "";

}
}

export {UI, displayBooks, addBook, delete, clear}