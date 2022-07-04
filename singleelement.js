// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').className);

// //change the styling
// document.getElementById('task-title').style.background= 'ddd';
// document.getElementById('task-title').style.color= 'white';
// document.getElementById('task-title').style.fontSize= '45px';
// // document.getElementById('task-title').style.display= 'none';

// //changing the content
// document.getElementById('task-title').textContent = "task change";
// document.getElementById('task-title').innerText = "task change";
// document.getElementById('task-title').innerHTML = <span style = "color : red" >drop your task here!!!</span>;

// query selector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-action'));
console.log(document.querySelector('h5'));

document.querySelector('li:first-child').style.background = 'black';
document.querySelector('li:first-child').style.color = 'white';
document.querySelector('li:last-child').style.background = 'green';
document.querySelector('li:nth-child(even)').style.background = 'blue';