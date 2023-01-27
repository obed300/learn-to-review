import './style.css';
import UI from './modules/func.js';
import List from './modules/class.js';

const add = document.querySelector('.add');
const listinput = document.querySelector('.list-input');
const clearAll = document.querySelector('.clear-all');

add.addEventListener('submit', (e) => {
  e.preventDefault();
  const setindex = (UI.getList()).length + 1;
  const input = listinput.value;
  const mylist = new List(input, false, setindex);
  UI.listLibrary(mylist);
  UI.addTodo(mylist);
});

document.addEventListener('DOMContentLoaded', () => {
  UI.displayList();
  UI.getList();
});

clearAll.onclick = () => {
  let tasks = JSON.parse(localStorage.getItem('items'));
  tasks = tasks.filter((item) => item.completed !== true);
  localStorage.setItem('items', JSON.stringify(tasks));
  window.location.reload();
};
