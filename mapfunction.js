// map function creates an array by calling a specific function on each element present
//in the parent array
//it is used to iterate over an array and calling functions on every elememt in the array.
 
const  numbers = [4,8,16,32,64];
const  newArr = numbers.map(Math.sqrt);
console.log(newArr);

const arr = numbers.map(myFunction)
function myFunction(num) {
    return num = 10;
}
console.log(arr);
//uses
// map function creates a new array from calling a function for every array
//element
// it calls a function once for each element in the array.
// it does not ececute the function for empty array
// it dosen't alter/change the elements un the original array it creates 
// new element in the array

const person = [{
    firstname :"David",
    lastname : "Adeleke",
}, {
    firstname : "kyle",
    lastname  : "jenna",
}, {
    firstname : "moses",
    lastname  : "sussy",
}];

const result = person.map(getFullName);

function getFullName(item){
    return [item.firstname,item.lastname].join("");
}
console.log(result);

