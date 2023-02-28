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

export {store}