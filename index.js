import { contact, bookShelf, addNew } from './modules/Transisions.js';
import UI from './modules/UI-Class.js';
import { DateTime } from './modules/luxon.js';

const dateElement = document.querySelector('.Date');

const date = DateTime.now();
dateElement.textContent = date.toLocaleString(DateTime.DATETIME_MED);

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('.Contact').addEventListener('click', contact);

document.querySelector('.Add').addEventListener('click', addNew);

document.querySelector('.List').addEventListener('click', bookShelf);