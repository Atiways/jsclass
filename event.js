// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log("helooooooooo");
// });

document.querySelector('.clear-tasks').addEventListener('click',task);

function task(e){
    // console.log("heloooooooooooooooooooooooo");

    let val;
    val = e;
    val = e.target;
    val = e.target.className;
    val = e.type;
    console.log(val);
};