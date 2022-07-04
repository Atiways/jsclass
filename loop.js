//loop can execute a block of code in a specific number of time
//for loop
//for/in it loops through a property of an object
//while loop it loops through a block of code as far as the condition is true
//do while loops through a block of code while the condition is true

for(let index = 0; index < 5; index++){
    console.log("The index value is "+ index);
}
//first index is the initialize value
//second inndex is the condition
//third index is increament or decreament

//for in: it iterates over the person object.Each one returns the key x
let person = {
    firstname :"david",
    lastname  :"chukwudi",
    age:20
}
for(let y in person){
    console.log(person[y]);
}   
let cars =["benz","toyota","lexsus"];
for(let x in cars){
    console.log(cars[x])
}
// WHILE LOOP
//initialize value
// let i = 0;

// while(i < 5){
//     console.log("the value of the loop is: " + i);
//     i++;
//     //increament or decreament
// }
//do while will execute the block of code once before checking the condition, if its true it will repeat the loop as
//long as the condition is true.
// let a = 2;
// do{
//     console.log("the number is "+ a);
//     a+=2
// }
// while(a < 20);

 let y = 10;

 while(y>0){
     console.log("the value of y is " + y);
     y--;
 }
// the break statement jumps out of the loops
for(let i=0;i<5;i++){
    if(i == 3){
        //break;
        continue;
    }
    console.log("the value of i is " + i);
}
//continue statement can be used to skip one loop iteration
//Conditional Staments
//These are used to perform different actions based on different conditions
//if statement specifies that the block of code executed must be true
//else statement specifies that the block of code executed in the same condition is false
//else if statement specifies a new condition to be tested if the first condition is false.
//Switch statement specifies many alternative blocks of code to be executed

if(3<5){
    console.log("Three is less than five");
}
// else{
//     console.log("Three is not less than five");
// }
else if(4>5){
    console.log("four is not greater than five");
}
else if(5<10){
    console.log("five is less  than ten");
}
else{
    console.log("number is not found");
}



