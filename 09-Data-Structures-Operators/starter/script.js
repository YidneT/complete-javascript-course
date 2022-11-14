'use strict';



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

// Destructuring Objects
/* 
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
 */
// Spread Operator
/* 
const arr = [1, 2, 3];
const badArr = [arr[0], arr[1], arr[2], 3, 4];
console.log(badArr);

const newArr = [...arr, 5, 6];
console.log(newArr);
console.log(...newArr);

// Copy array
const menuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuCopy); 
*/


// Maps - Data structure
/* const rest = new Map();
rest.set('name', 'Classicon Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest.set('Categories', 'Organic')
  .set('Open', 11)
  .set('Close', 24)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest.get('name'));
console.log(rest.get('Open'));

const time1 = 22;
const time2 = 2;
console.log( rest.get(time1 > rest.get('Open') && time1 < rest.get('Close')) );
console.log( rest.get(time2 > rest.get('Open') && time2 < rest.get('Close')) );

console.log(rest.has('Categories'));
rest.delete(1);
// rest.clear();
const arr = [1,2];
console.log(rest.set(arr, 'My array'));
console.log(rest.get(arr));

const myH1 = document.querySelector('h1');
rest.set(myH1, 'Heading');

console.log(rest);
console.log(rest.size);

const question = new Map([
  ['que', 'What is the best programing language?'],
  [1, 'C'],
  [2, 'JS'],
  [3, 'Java'],
  [4, 'Python'],
  ['answer', 2],
  [true, 'Correct 😁'],
  [false, 'Boooo 👎'],
]);

console.log(question);

for (const [key, value] of question) {
  key === 'que' ? console.log(`Que: ${value}`) : '';
  if (typeof key === 'number') { 
    console.log(`${key}: ${value}`);
  }
}
// const answer = prompt('Your Answer'); 
const answer = 2;
console.log(answer);
if (!isNaN(answer) && Number(answer) >= 1 && Number(answer) <= 4) {
  answer == question.get('answer') ? console.log(question.get(true) + ` Javascript all the way`) : console.log(question.get(false) + ` Duuuuude "` + question.get(Number(answer))  + `" sucks deep`); 
} else {
  console.log('Cmon dude I was looking for numbers between 1 and 4 😒');
}

// Convert map to Array
const converted = [...question];
console.log(converted); */


// Working with Strings
const airline = 'Ethiopian Airline';
console.log(airline[2]); // h
console.log(airline.length); // 17
console.log(airline.indexOf('i')); // 3
console.log(airline.lastIndexOf('i')); // 14
console.log(airline.indexOf('Air')); // 10
console.log(airline.slice(10)); // Airline
console.log(airline.slice(airline.indexOf(' ') + 1)); // Airline
console.log(airline.slice(0, 5)); // Ethio
console.log(airline.slice(-2)); // ne
console.log(airline.slice(5, -4)); // pian Air
console.log(airline.toUpperCase());

const checkMiddleSeat = function (seat) {
  const st = seat.slice(-1);
  if (st == 'B' || st == 'E') {
    console.log('You got the middle seat 😒');
  } else {
    console.log('You got lucky 😎');
  }
}

// Fixing white space
const email = '  joNaS@gmail. COm \n';
const email1 = email.toLowerCase().trim();
const email2 = email.toLocaleLowerCase().replaceAll(' ', '');
console.log(email1); // jonas@gmail. com
console.log(email2); // jonas@gmail.com

const priceGB = '128,92#';
const priceUS = priceGB.replace(',', '.').replace('#', '$');
console.log(priceUS);

const announce = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announce.replace('door', 'gate'));
console.log(announce.replaceAll('door', 'gate'));

const plane = 'Boeing B787neo';
console.log(plane.includes('B787'));
console.log(plane.includes('A787'));
console.log(plane.startsWith('Bo'));
if (plane.includes('Boeing') && plane.endsWith('neo')) {
  console.log('Part of the new Boeing series');
}

// String split and join
const fullname = 'yidnek tamirat';
const [first, last] = fullname.split(' ');
console.log(`Name: ${first} ${last}`);

const capitalizeName = function (fullname) {
  const name = [];
  for (const n of fullname.split(' ')) {
    // name.push(n[0].toUpperCase() + n.slice(1));
    name.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return name;
}

console.log(capitalizeName('yid tam taf tek'));
console.log(capitalizeName('red green blue').join(', '));

// Padding
const message = 'Card No: 1234'
console.log(message.padEnd(20, '*'));
const maskCardNo = function (number) {
  const num = String(number);
  const length = num.length;
  const sliced = num.slice(-4);
  console.log(sliced.padStart(length, '*'));
}

maskCardNo(1234567898765);
maskCardNo('12376543273828');

// Repeat
const msg = 'Bad weather! All departures delayed--- ';
console.log(msg.repeat(3));

const planesInline = function (n) {
  console.log(`${n} planes inline ${'✈️'.repeat(n)}`);
}

planesInline(3);
planesInline(7);


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(' Cleaning Flights'.padStart(20, '='));
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  let [type, from, to, time] = flight.split(';');
  type = type.slice(1).replace('_', ' ');
  type = type.includes('Delayed') ? `🛑 ${type}` : type.padStart(20, ' ');
  from = getCode(from);
  to = getCode(to);
  time = time.replace(':', 'h');
  console.log(`${type} from ${from} to ${to} (${time})`);
}


