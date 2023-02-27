
class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

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

class store {
    static getBook(){
        let books;
        if(localStorage.getItem("books") === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        return books
    }
    static addBook(book){
        const books = store.getBook();

        books.push(book);
        localStorage.setItem("books", JSON.stringify(books))
    }
    static removebook(title, author){
        const books = store.getBook();
        books.forEach((book, index) => {
        if(book.title === title && book.author === author){
        books.splice(index,1)
        }
        });
        localStorage.setItem("books", JSON.stringify(books))
    }
    
}



document.addEventListener("DOMContentLoaded", UI.displayBooks)

document.querySelector("#book-form").addEventListener("submit", (e) =>{
   e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value

    if(title === "" || author === ""){
       
    }else{

    const book = new Book(title, author)
    console.log(book);
    store.addBook(book)

    UI.addBook(book);

    UI.clear()
}
})


document.querySelector("#book-list").addEventListener("click", (e) =>{
    UI.delete(e.target);
    store.removebook( e.target.parentElement.previousElementSibling.previousElementSibling.textContent,e.target.parentElement.previousElementSibling.textContent)
})

const bookList = document.querySelector('.list-container');
    const contactForm = document.querySelector('.contact-form');
    const addBook = document.querySelector('.container');

function contact() {
    contactForm.style.display = 'flex';
    addBook.style.display = 'none';
    bookList.style.display = 'none';
  }
  
  function bookShelf() {
    contactForm.style.display = 'none';
    addBook.style.display = 'none';
    bookList.style.display = 'block';
  }
  
  function addNew() {
    contactForm.style.display = 'none';
    addBook.style.display = 'block';
    bookList.style.display = 'none';
  }

  document.querySelector('.Contact').addEventListener('click', contact);

document.querySelector('.Add').addEventListener('click', addNew);

document.querySelector('.List').addEventListener('click', bookShelf);