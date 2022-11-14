'use strict';

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

const flight = 'LH123';
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
checkIn(flight, yidnek);


