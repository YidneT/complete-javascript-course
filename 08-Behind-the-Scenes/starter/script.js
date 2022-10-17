'use strict';

console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);
calcAgeArrow(1980);

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 7, 8);

// Arrow functions don't have arguments keyword
const addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(1, 2, 5, 7, 8);

// Primitives Vs. objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'me',
  age: 30,
}

const friend = me;
friend.age = 27;
console.log('Friend: ' + friend.age );
console.log('Me: ' + me.age );