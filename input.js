const form = document.querySelector('form');
const taskInput  = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = '';
//form.addEventListener('submit', runEvent);
//keydown
//taskInput.addEventListener('keydown', runEvent)
//keypress
//taskInput.addEventListener('keypress', runEvent)
// keyup
//taskInput.addEventListener('keyup', runEvent);
// focus
// taskInput.addEventListener('focus', runEvent)
//blur(opposite of focus)
// taskInput.addEventListener('blur', runEvent)
//cut
//taskInput.addEventListener('cut', runEvent)
//paste
//taskInput.addEventListener('paste', runEvent)
//Input
// taskInput.addEventListener('input', runEvent)
//change
taskInput.addEventListener('change', runEvent)
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    // heading.innerText = e.target.value;
    console.log(taskInput.value);
    // e.preventDefault();
}
