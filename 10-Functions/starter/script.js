'use strict';

// Default Parameters
/* const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {

  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('AB123');
createBooking('LM342', 2, 250);
createBooking('OP321', undefined, 840); */

// Passing Arguments
/* const flight = 'LH123';
const yidnek = {
  name: 'yidnek tame',
  passport: 'ET123456'
}

const checkIn =  function (flightNum, passenger) {
  flightNum = 'AB321';
  passenger.name = `MR. ${passenger.name.toUpperCase()}`;
  passenger.passport == 'ET123456' ? console.log('Good to go') : console.log('Wrong Passport') ;
  console.log(flight, yidnek);
}
checkIn(flight, yidnek);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
  console.log(person.passport);
}
newPassport(yidnek);
checkIn(flight, yidnek); */

// Higher order functions
/* 
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
}

// our higher order function
const transform = function (str, fn) {
  console.log(`Original: ${str}`);
  console.log(`Transformed: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transform('js is the best!', upperFirstWord);
transform('js is the best!', oneWord);

const high5 = function () {
  console.log('HI');
}

document.body.addEventListener('click', high5);
['john', 'doe'].forEach(high5);

// Functions returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Emu');
greet('Hello')('Key');

const fullName = first => last => console.log(`${first} ${last}`);
fullName('Yidnek')('Tame'); */

// Call, Apply and bind method
/* 
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){
    console.log(`${name[0].toUpperCase() + name.slice(1)} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name
    });
  }
};

const book = lufthansa.book;
// book(123, 'abc') // doesn't work because this is not defined on the function level
lufthansa.book('324', 'Yidne'); // Works because it's inside the same object
book.call(lufthansa, '764', 'Emu');
book.call(lufthansa, '254', 'Bubu');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}
book.call(eurowings, '123', 'John');
book.call(eurowings, '388', 'Doe');
book.apply(eurowings, [456, 'Eden']);
book.apply(eurowings, [667, 'Bayu']);
console.log(eurowings);

// Bind method
const swiss = {
  airline: 'Swiss',
  iataCode: 'SW',
  bookings: []
}

const famuData = [765, 'famu'];
// book.call(swiss, ...famuData);
const bookSW = book.bind(swiss);
bookSW(...famuData);
const bookSW123 = book.bind(swiss, 123);
bookSW123('marta')

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}
lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial application
const addTax = (rate, value) => value + (value * rate/100);
console.log(addTax(25, 200));

const addVAT = addTax.bind(null, 15);
console.log(addVAT(200));
const addTOT = addTax.bind(null, 10);
console.log(addTOT(200));
console.log('USING FUNCTION RETURNING FUNCTION');
const tax =  rate => value => value + (value * rate/100);
const vat = tax(15);
console.log(vat(200));
const tot = tax(10);
console.log(tot(200)); */


//// CODING CHALLENGE 1
/* 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call. */
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    let que = `${this.question} \n`;
    for (const option of this.options) {
      que = que + option + '\n';
    }
    que = que + '(Write option number)';
    const userAnswer = window.prompt(que);
    if (Number.isInteger(Number(userAnswer)) && userAnswer >= 0 && userAnswer <= 3) {
      this.answers[userAnswer]++;
    }
    this.displayResults(this.answers);
  },
  displayResults(type){
    console.log(...type);
  }
};
// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
console.log(poll);





//// CODING CHALLENGE 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};