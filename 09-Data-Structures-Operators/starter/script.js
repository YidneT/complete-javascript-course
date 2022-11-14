'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
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
