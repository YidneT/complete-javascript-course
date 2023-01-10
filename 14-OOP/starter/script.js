'use strict';

// ## COnstructor funtions and the new operator
const Person = function(fName, bYear) {
  this.fName = fName;
  this.bYear = bYear;

};

Person.prototype.calAge = function () {
  return Number((new Date()).getFullYear()) -  this.bYear;
}

const p1 = new Person('Abebe', 1990);
const p2 = new Person('Eden', 1996);
console.log(p1, p2);
console.log(p1.calAge());
console.log(p2.__proto__);