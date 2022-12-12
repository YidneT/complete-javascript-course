'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const populateUsername = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}
populateUsername(accounts);

// Supporting functions
const clearInput = function(...input){
  input.forEach(element => element.value = '');
}
const formError = function (...input) {
  input && input.forEach(element => element.style.border = '1px solid #ff0000');
  clearInput(...input);
  console.log('Incorrect details');
}

// Login Users
let currentAccount = account2;

const authUser = function (user, pin) {
  return accounts.find(account => account.username === user && account.pin === Number(pin));  
}

const loginUser = function (account) {
  displayAccountDetails(account);
  populateHeader(account);
  containerApp.style.opacity = 1;
  console.log(accounts);
}

const logout = function () {
  containerApp.style.opacity = 0;
  labelWelcome.innerHTML = `Login to get started`;
}

const populateHeader = function (account) {
  labelWelcome.innerHTML = `Howdy ${account.owner}`;
  clearInput(inputLoginUsername, inputLoginPin);
  /* document.querySelector('nav').style.display = 'none';
  const greetings = `
    <div style=" display: flex; justify-content: space-between; width: 100%; ">
      <h2>Howdy ${account.owner}</h2>
      <button class="login__btn" style=" font-size: 150%; ">Logout 👋</button>
    </div>
  `;
  document.querySelector('body').insertAdjacentHTML("afterbegin", greetings); */
}

const populateMovements = function (account, sort = false) {
  const movements = sort ? 
    account.movements.slice().sort((a, b) => a - b)
    : account.movements;
  containerMovements.innerHTML = '';
  movements.forEach((move, index) => {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type.toUpperCase()}</div>
        <div class="movements__date">${Math.floor(Math.random() * 30) } days ago</div>
        <div class="movements__value">$ ${move.toFixed(2)}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);    
  });

}

const populateSummary = function (account) {
  const movements = account.movements;
  const balance = movements
    .reduce((accumulate, move) => accumulate + move, 0);
  labelBalance.innerHTML = balance.toFixed(2);
  account.balance = balance;

  const deposit = movements
    .filter(move => move > 0)
    .reduce((accumulate, move) => accumulate + move, 0);
  labelSumIn.innerHTML = deposit.toFixed(2);
  account.deposit = deposit;

  const withdrawal = Math.abs(
    movements
    .filter(move => move < 0)
    .reduce((accumulate, move) => accumulate + move, 0)
  );
  labelSumOut.innerHTML = withdrawal.toFixed(2);
  account.withdrawal = withdrawal;

  const interest = movements
    .filter(move => move > 0)
    .map(move => move * account.interestRate/100)
    .reduce((accumulate, move) => accumulate + move, 0);
  labelSumInterest.innerHTML = interest.toFixed(2);
  account.interest = interest;
}

const displayAccountDetails = function (account) {
  populateMovements(account);
  populateSummary(account);
}

// Button actions
// ==============
// Submit Login
const submitLogin = function (e) {
  e.preventDefault();
  const user = inputLoginUsername.value;
  const pin = inputLoginPin.value;
  currentAccount = authUser(user, pin);
  if (currentAccount) {
    loginUser(currentAccount);
  } else {
    formError(inputLoginUsername, inputLoginPin);
  }
}
btnLogin.addEventListener('click', submitLogin);

// Transfer payment
const transferPayment = function (e) {
  e.preventDefault();
  const transferTo = inputTransferTo.value;
  const transferAmount = Number(inputTransferAmount.value);
  const accTo = accounts.find(acc => acc.username === transferTo);

  if(transferTo !== currentAccount.username && accTo !== undefined){
    if (transferAmount > 0 && transferAmount < currentAccount.balance) {
      currentAccount.movements.push(transferAmount * -1);
      accTo.movements.push(transferAmount);
      displayAccountDetails(currentAccount);
      clearInput(inputTransferTo, inputTransferAmount);
      document.querySelector('.operation--transfer').insertAdjacentHTML("beforeend", `<p style="color: green">Submited $ ${transferAmount} to ${accTo.owner} succesfuly</p>`);
    } else {
      document.querySelector('.operation--transfer').insertAdjacentHTML("beforeend", `<p style="color: red">Transfer amount error!</p>`);
    }
  } else{
    formError(inputTransferTo, inputTransferAmount);
  }
}
btnTransfer.addEventListener('click', transferPayment);

// Close Account
const closeAccount = function (e) {
  e.preventDefault();
  const user = inputCloseUsername.value;
  const pin = inputClosePin.value;
  const closableAccount = authUser(user, pin);
  if (closableAccount && closableAccount == currentAccount) {
    const index = accounts.findIndex( acc => acc.username === closableAccount.username);
    index && accounts.splice(index, 1);
    logout();
  } else {
    formError(inputCloseUsername, inputClosePin);
  }
}
btnClose.addEventListener('click', closeAccount);

// Request Loan
const requestLoan = function (e) {
  e.preventDefault();
  const movements = currentAccount.movements;
  const loan = Number(inputLoanAmount.value);
  const loanAvailable = movements.some(mov => loan > 0 && mov >= loan * 0.1);
  if (loanAvailable) {
    movements.push(loan);
    displayAccountDetails(currentAccount);
    clearInput(inputLoanAmount);
  } else {
    formError(inputLoanAmount); 
  }
}
btnLoan.addEventListener('click', requestLoan);

// Sort movements
let sorted = false;
const sortMove = function (e) {
  e.preventDefault();
  if (sorted) {
    populateMovements(currentAccount);
    sorted = false;    
  } else {
    populateMovements(currentAccount, true);
    sorted = true;
  }
}
btnSort.addEventListener('click', sortMove);

/* Temporary */
loginUser(currentAccount);
/* Temporary */


/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

// ## Convert and Check Numbers
// ## Math Rounding 
/*
console.log(Math.sqrt(25)); // returns square root of 25 = 5
console.log(25 ** (1/2)); // returns square root of 25 = 5
console.log(8 ** (1/3)); // returns square root of 8 = 2

console.log(Math.max(5, 8, 44, 11, 2)); // returns the maximum number
console.log(Math.min(5, 8, 44, 11, 2)); // returns the minimum number
console.log(Math.max(5, 8, '44', 11, 2)); // returns the maximum number with type coercion
console.log(Math.max(5, 8, '44px', 11, 2)); // returns NaN - it doesn't do parsing

console.log(Math.PI * Number.parseFloat('10px') ** 2); // returns area of square from parsed length

console.log(Math.floor(Math.random() * 6) + 1); // random number b/n 1-6

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(-5, 5));

console.log(Math.trunc(44.4)); // 44
console.log(Math.trunc(44.8)); // 44
// Round number appropriate 
console.log(Math.round(44.4)); // 44
console.log(Math.round(44.8)); // 45
// Round number up
console.log(Math.ceil(44.4)); // 45
console.log(Math.ceil(44.8)); // 45
// Round number down
console.log(Math.floor(44.4)); // 44
console.log(Math.floor(44.8)); // 44

console.log(Math.trunc(-44.4)); // -44 
console.log(Math.floor(-44.4));  // -45

// Floating point numbers or decimals
console.log((4.4).toFixed(0));
console.log((4.4).toFixed(2));
console.log((4.234).toFixed(2));
console.log(+(4.234).toFixed(2)); */

// ## Dates

const now = Date();
console.log(now);
console.log(new Date('Aug 02 2022 18:05:12'));
console.log(new Date('December 12, 2022'));
console.log(new Date(account1.movementsDates[1]));

console.log(new Date(2021, 10, 19, 15, 22, 44)); // JS month is 0 based counter so 10 is November
console.log(new Date(2021, 10, 31)); // Nov only have 30 days so this will result Dec 01

console.log(new Date(0));
console.log(new Date(3* 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19)
console.log(future);