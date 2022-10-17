'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (sIndex, mIndex) {
    return [this.starterMenu[sIndex], this.mainMenu[mIndex]];
  },

  orderDelivery: function ({
    sIndex = 1, 
    mIndex = 1, 
    time = '22:00', 
    address = 'Addis'
  }){
    console.log(`
      Order received: ${this.starterMenu[sIndex]} and 
      ${this.mainMenu[mIndex]} will be delivered to ${address} at ${time}
    `);
  }

};

// Destructuring Objects
const {
  name: n, 
  address: add, 
  openingHours: oh
} = restaurant;
console.log(n, oh);

// Default value
const {
  menu = ['nothing'], 
  starterMenu: starters = []
} = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 7;
let b = 15;
const obj = {a: 10, b: 20, c: 30, d: 40};
({a, b} = obj);
console.log(a, b);

// Nested onjects
const {
  fri: {
    open: op,
    close: cl
  }
} = restaurant.openingHours;
console.log(op, cl);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Bole',
  sIndex: 1,
  mIndex: 2,
});

// Spread Operator
const arr = [1, 2, 3];
const badArr = [arr[0], arr[1], arr[2], 3, 4];
console.log(badArr);

const newArr = [...arr, 5, 6];
console.log(newArr);
console.log(...newArr);

// Copy array
const menuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuCopy);



 




















/* 
// Distructuring Arrays
const arr = [2, 3, 4];
const [x, y, z] = arr;

console.log(y);
console.log(arr);
const [fir, ,sec] = restaurant.categories;
console.log(fir, sec);

// Switching Variables
let [main, other] = restaurant.categories;
[main, other] = [other, main];
console.log(main, other);

// Array distructuring from a function
console.log(restaurant.order(1, 0));

// Distructuring in nested array
const nested = [1, 2, [3, 4]];
const [i, , j] = nested;
const [a, , [b, c]] = nested;
console.log(i, j);
console.log(a, b, c);

// Default values
const [e, f, g=3] = [1, 2];
console.log(e, f, g); 
*/

