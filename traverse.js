let list = document.querySelector('ul.collection');
let listItem = document.querySelectorAll('li.collection-item');

val = list;
val = listItem;

//get child nodes
val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[1].nodeType;

val = list.children;
val = list.children[2];
val = list.children[2].textContent = 'hello';
//getting the children children of an element
val = list.children[3].children;
val = list.children[3].children[0].id = 'task-link'
val = list.children[3].children[0];

// val = list.firstChild;
// val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

// count
val = list.childElementCount;

// parent
val = list.parentNode;
val = list.parentElement.parentElement;

//get sibling
val = listItem.nextsibling;
val = listItem.nextElementsybling.previousElementSibling;
// previous sybling
val = listItem.previoussibling;
val = listItem.nextElementSibling;
// format of type of nodes
// 1 = element
// 2 = attribute
// 3 = text
// 8 = comment
// 9 = document(itself)
// 10 = doctype

console.log(val);
