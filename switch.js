//if there is a mtch the block will be executed if there is no match the default will be execuuted.

let colors = "indigo";
switch(colors){
    case "white":
        console.log("color found is white");
        break;
    case "black":
        console.log("color found is black");
        break;
    case "blue":
        console.log("color found is blue");
        break;
    case "red":
        console.log("color found is red");
        break; 
    default:
        console.log("color not found");   
}
//write a javascript for loop that will iterate from 0 to 15 for each iteration it
//will check if the current number is odd or even and display a message.
//write a javascript while will iterate from 1 to 100, multiple of 3 execute giit, multiple of 5 execute africa 
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let even = [2,4,6,8,10,12,14];
let odd = [1,3,5,7,9,11,13,15];

for(let i=0;i<=15;i++){
    // console.log(i);
    if(i %2 == 0){ 
        console.log("this is an even number " + i)
    }
    // if else(i %1 == 0);{
    //     console.log("this is an odd number "+ i)
    // }


}