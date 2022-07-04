// This is a block of code performed to design a particular
//for the js function code to be executed it must have an 
//javascript has various inbuilt function that performs differnt task.
// The function name contains the letter,digit and underscore.
//The same rules that come for an identifier is the same for functions.
function greetings() {
    console.log("hello how are you");
}
greetings();
//you can have more than one parameters
//parameters are passed into the function in form of variables
// function addnumber(num1, num2) {
//     let sum = num1+num2;
//     console.log(sum);
// }
// addnumber(20,25);
//the return statement is used 
function addnumber(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let a = addnumber(20, 25);
console.log(a);
b = addnumber(a, 30);
console.log(b);
//classwork
function statement(color, car_type, place) {
    console.log("jide bought a " + color + car_type + " packed outside the " + place);
}
statement("white ","mercedes benz","garage");

//calculating the circumference of a circle
function circumference(radius) {
    let circumference = Math.PI *2*radius;
    console.log("The circumference is " + circumference)
    let area = Math.PI *radius*radius;
    console.log("the area is "+ area)
}
circumference(2);
circumference(10);