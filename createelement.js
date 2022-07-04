const li =document.createElement('li');
//add class name
li.className = 'collection-item';
// add id
li.id = 'new-item';

//set new attribute
li.setAttribute('title','text');

//Create Text node
li.appendChild(document.createTextNode('Hello world'));
// create a link elememt
const link  = document.createElement('a');
//addclass name
link.className='delete-item secondary-content';
// add icons
link.innerHTML='<i class="fa fa-remove"></i>';
// append link to li
li.appendChild(link);
// Append li into ul
document.querySelector("ul.collection").appendChild(li);
console.log(li);