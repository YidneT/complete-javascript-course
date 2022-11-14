'use strict';



// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours =  {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}; 
const restaurant = {
  name: 'Classico Italiano',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Obeject literal
  openingHours,

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '12:00'}) {
    console.log(this.mainMenu[mainIndex], this.starterMenu[starterIndex], time);
  },

  orderPasta (ing1, ing2, ing3) {
    console.log('Your pasta with: ' + ing1 + ', ' + ing2 + ' and ' + ing3);
  },

  orderPizza (mainIng, ...moreIng){
    console.log(mainIng, ...moreIng);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
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
/* const [a, b, ...others] = [12, 5, -5, 0, 4];
console.log(a, b, others);

const [p, , r, ...moreFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(p, r, moreFood);

restaurant.orderPizza('mushrooms', 'spinach', 'onion', 'olives'); */

// Short Circuiting ($$ and ||)
/* console.log("---- OR ----");
console.log(3 || 'Jonas'); // 3
console.log("" || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello */

// Practical example
/* const g1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(g1);
restaurant.numGuests = 23;
const g2 = restaurant.numGuests || 10;
console.log(g2);
restaurant.numGuests = 0;
const g3 = restaurant.numGuests || 5;
console.log(g3); */
// Solving issue with nullish coalasing operator
/* const g4 = restaurant.numGuests ?? 5
console.log(g4);
console.log("---- AND ----");
console.log(3 && 'Jonas'); // Jonas
console.log(0 && 'Jonas'); // 0 */

// Practical example
/* if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('pussy', 'cat', 'dolls'); */

/* 
//// CODING CHALENGE #1
// 1. Create one player array for each team (variables 'players1' and 'players2')
const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1, players2);
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk1, ...fieldPlayers1] = [...players1];
console.log(gk1, fieldPlayers1);
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...names){
  const scorers = [...names]; 
  console.log(scorers, scorers.length);
};
printGoals(...game.scored);
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
game.odds.team1 > game.odds.team2 && console.log('team1');;
game.odds.team1 < game.odds.team2 && console.log('team2');;
 */


// Looping Arrays
/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log('===ForOf===');
for (const item of menu) {
  console.log(item);
}
for (const [i, el] of menu.entries()) {
  console.log(`Index: ${i} -> Item: ${el}`);
}
console.log('===ForEach===');
menu.forEach(item => {
  console.log(item);
}); */

// Optional Chaining
/* if(restaurant && restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open);
}
console.log(restaurant?.openingHours?.mon?.open);
console.log(restaurant?.openingHours?.thu?.open);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays) {
  restaurant.openingHours[day] && console.log(restaurant.openingHours[day]);
  const open = restaurant.openingHours[day]?.open ?? 'not today';
  console.log(`${day}: opens at ${open}`);
  // restaurant.openingHours[day] && console.log(`${day}: open at ${restaurant.openingHours[day]?.open}`);
}

console.log(restaurant.orderPasta?.('a', 'b', 'c') ?? 'Method does not exist');
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

const users = [{name: 'John', email: 'john@doe.com'}]
console.log(users[0]?.name ?? 'No User');
console.log(users[2]?.name ?? 'No User'); */

// Looping Objects: Keys, Values, Entries
/* const properties = Object.keys(openingHours);
console.log(`We are open for ${properties.length} days`);
for (const day of properties) {
  console.log(day);
}

const values = Object.values(openingHours);
for (const value of values) {
  console.log(value);
}

const entries = Object.entries(openingHours);
for (const [key, {open, close}] of entries) {
  console.log(`${key}: works ${open} - ${close}`);
} */

/* 
//// CODING CHALLENGE #2
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [key, value] of game.scored.entries()) {
  console.log(`Goal ${key+1}: ${value}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let average = 0;
for (const od of Object.values(game.odds)) {
  average += od;
}
console.log(average/Object.values(game.odds).length);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const [key, value] of Object.entries(game.odds)) {
  const str = game[key] ? 'victory ' + game[key] : 'draw';
  console.log(`Odd of ${str}: ${value}`);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : scorers[player] = 1;
}
console.log(scorers); 

*/

// Sets
/* console.log(new Set('Gegeba'));
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);
console.log(`Set size: ${ordersSet.size}`);
console.log(`Has Pasta? ${ordersSet.has('Pasta')}`);
console.log(`Has pasta? ${ordersSet.has('pasta')}`);
ordersSet.add('bread');
ordersSet.add('bread');
console.log(ordersSet);
ordersSet.delete('Pizza');
console.log(ordersSet);
for (const order of ordersSet) {
  console.log(order);
}
const uniqueOrders = [...ordersSet];
console.log(uniqueOrders);
ordersSet.clear();
console.log(ordersSet); */

/* 
//// CODING CHALlENGE #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1. Create an array 'events' of the different game events that happened (no duplicates)
const eventSet = new Set(gameEvents.values());
const events = [...eventSet];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (const [time, event] of gameEvents) {
  const half = time < 45 ? 'First Half' : 'Second Half';
  console.log(`[${half}] ${time}: ${event}`);
}
 */

// Working with strings

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


