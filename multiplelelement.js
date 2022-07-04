// documents.getElementByClassName

// const items = document.getElementsByClassName 
// ('collection-item');
// console.log(items);
// console.log(items[1]);
// items[0].style.color = 'red';
// items[2].textContent = 'hello world';

// const listItem = document.querySelector('ul').
// getElementsByClassName('collection-item');

// console.log(listItem);

//get element by tag names
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color='blue';
// lis[2].textContent='hello broo';
// converting the html collection into an array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}:Hello world`
// });
// console.log(lis);

// QUERY SELECTOR ALL
 const items = document.querySelectorAll('ul.collection li.collectiom-item');

 items.forEach(function(item, index){
     items.textContent = `${index}:Hello world`
 });

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = 'red';
})

for(i=0; i < liEven.length; i++){
    liEven[i].style.background = 'blue';
}
 console.log(items)














