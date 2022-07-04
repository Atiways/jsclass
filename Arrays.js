let cars = ["benz", "TOYOTA", "peogeut"];
let trucks = ['mark','iveco','arthouse'];
let vehicles = cars.concat(trucks);
console.log(vehicles);

console.log(cars[2]);

//changing values in an array
cars[0] = "volks";
console.log(cars);
// The real strength of an array are the inbuilt properties or methods
console.log(cars.length); //the number of values in the array
console.log(cars.push("lexus"));// push to add a newvalue to the array
console.log(cars);
console.log(cars.toString()); //converts the array to a string
// THE JOIN METHOD TO JOIN THE ARRAY TO A STRING with any character
console.log(cars.join('+'));
console.log(cars);
// pop is used to remove the last value of the array
console.log(cars.pop());
console.log(cars);
// shift to remove the first value of the array
console.log(cars.shift());
console.log(cars);
// unshift adds a new value to the first array\
console.log(cars.unshift("prada"));
console.log(cars);
//sort the array alphabetically
console.log(cars.sort());
console.log(cars);
//reverse the value of the array
console.log(cars.reverse());
console.log(cars);