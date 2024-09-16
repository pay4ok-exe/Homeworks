'use strict';

// Part 1
const restaurant = 'dzahh'; //String
const shop = 'Magnum';
let team = ['Messi','Ronaldo','Neymar'];

let a = 100; //Integer
let b = 100.100; //Float
let isDog = false; //Boolean
let waterBootle = null; //Null
let Adam; //Undefined
let c = 1 / 0; //Infinity
let d = 2 * 'Samat'; //NaN

console.log(restaurant);
console.log(shop);
console.log(team);


// Part 2
const vehicle = {
    brandName: 'BMW',
    model: 'X5'
};

console.log(vehicle);

vehicle.model = 'M1';
console.log(vehicle);

delete vehicle.model;
console.log(vehicle);


// Part 3
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
};

console.log(`Sum of all salaries: ${sum}`)