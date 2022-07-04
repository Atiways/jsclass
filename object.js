// an object is a variable and a stand alone entity,with properties and value e.g a cup is an object and it has an enity
// cup properties e.g color and white value

let car = {
    car_name : "benz",
    car_color : "Black",
    price : 45000.00,
    car_hp: function(){
        return 700;
    },
    car_description: function(){
        console.log(this.car_name + " "+ this.price);
    }
}

car.car_description();
let result = car.car_hp();
console.log(result);
console.log(car.car_name);
console.log(car.price);
console.log(car.car_color);
//return function returns a particular value from the function itself to the function caller.