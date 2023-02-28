
    const contactForm = document.querySelector('.contact-form');
    const bookList = document.querySelector('.list-container');
    
    const addBook = document.querySelector('.container');

        
const contact = () => {
    contactForm.style.display = 'flex';
    addBook.style.display = 'none';
    bookList.style.display = 'none';
  }
  
  const bookShelf = () => {
    contactForm.style.display = 'none';
    addBook.style.display = 'none';
    bookList.style.display = 'block';
  }
  
 const addNew = () => {
    contactForm.style.display = 'none';
    addBook.style.display = 'block';
    bookList.style.display = 'none';
  }

    export {contact, bookShelf, addNew}