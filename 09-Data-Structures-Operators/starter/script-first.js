'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
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

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '12:00'}) {
    console.log(this.mainMenu[mainIndex], this.starterMenu[starterIndex], time);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log('Your pasta with: ' + ing1 + ', ' + ing2 + ' and ' + ing3);
  },

  orderPizza: function (mainIng, ...moreIng){
    console.log(mainIng, moreIng);
  },
};

// Destructuring Arrays
/* const arr = [2,4,[5,6]];
const [x,y,z] = arr;
console.log(x, y,z);
console.log(arr); */

// Object destructuring
/* const { 
  name: rsName, 
  openingHours:rsOpening, 
  categories: rsCategories,
  starterMenu: stMenu = [],
} = restaurant;
console.log(rsName, rsOpening, rsCategories, stMenu);

let a = 111;
let b = 999;
let obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); */

// Spread Operator
/* let Arr1 = [1, 2, 3];
let Arr2 = [4, 5, 6];
const nArr = [...Arr1, ...Arr2, 7, 8];
console.log(nArr);
console.log(...nArr);
console.log(...restaurant.mainMenu);
const copyMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(copyMenu);

const ingredients = [
  prompt('Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
restaurant.orderPasta(...ingredients); */

// Rest Pattern
const [a, b, ...others] = [12, 5, -5, 0, 4];
console.log(a, b, others);

const [p, , r, ...moreFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(p, r, moreFood);

restaurant.orderPizza('mushrooms', 'spinach', 'onion', 'olives');



