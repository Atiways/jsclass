// how to replace an element
// create an element
const newheading = document.createElement('h5');
// add id
newheading.id = 'task-title';
// add new text node
newheading.appendChild(document.createTextNode('Add task list'));

// get the old heading
const oldheading = document.getElementById('task-title');

//get the parent element
const cardAction = document.querySelector('.card-action');

// replace
cardAction.replaceChild(newheading,oldheading);

// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list element
lis[1].remove();

//remove the child element
list.removeChild(lis[3]);