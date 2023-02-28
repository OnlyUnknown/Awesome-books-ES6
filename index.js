import{contact, bookShelf, addNew} from "./modules/Transisions.js"
import { UI } from "./modules/UI-Class.js";


document.addEventListener("DOMContentLoaded", UI.displayBooks)





  document.querySelector('.Contact').addEventListener('click', contact);

document.querySelector('.Add').addEventListener('click', addNew);

document.querySelector('.List').addEventListener('click', bookShelf);