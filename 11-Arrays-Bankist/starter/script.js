'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
// BUILDING THE APPLICATION
/////////////////////////////////////////////////

// Prepare and populate username for all users
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
        <div class="movements__value">$ ${move}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);    
  });

}

const populateSummary = function (account) {
  const movements = account.movements;
  const balance = movements
    .reduce((accumulate, move) => accumulate + move, 0);
  labelBalance.innerHTML = balance;
  account.balance = balance;

  const deposit = movements
    .filter(move => move > 0)
    .reduce((accumulate, move) => accumulate + move, 0);
  labelSumIn.innerHTML = deposit;
  account.deposit = deposit;

  const withdrawal = Math.abs(
    movements
    .filter(move => move < 0)
    .reduce((accumulate, move) => accumulate + move, 0)
  );
  labelSumOut.innerHTML = withdrawal;
  account.withdrawal = withdrawal;

  const interest = movements
    .filter(move => move > 0)
    .map(move => move * account.interestRate/100)
    .reduce((accumulate, move) => accumulate + move, 0);
  labelSumInterest.innerHTML   = interest;
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

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ## Simple array methods
/* 
let arr = [1, 2, 3, 4, 5];
let arr2 = ['a', 'c', 'e', 'b', 'd']

// SLICE - does not mutates original array, makes a copy
console.log('== SLICE ==');
console.log(arr.slice(2)); //[3, 4, 5]
console.log(arr.slice(0, 2));  //[1, 2]
console.log(arr.slice(-1)); //[5]
console.log(arr.slice(1, -1)); //[2, 3, 4]

// SPLICE - mutates original array
console.log('== SPLICE ==');
// console.log(arr.splice(1));
console.log(arr.splice(-1));
console.log(arr);
// console.log(arr.splice(2));
console.log(arr.splice(1, 2)); // The second variable is number of elements to delete
console.log(arr);

// REVERSE - mutates original array
console.log('== REVERSE ==');
console.log(arr2.reverse());
console.log(arr2);

// CONCAT - does not mutates original array, makes a copy
console.log('== CONCAT ==');
console.log(arr.concat(arr2));
console.log([...arr2, ...arr]); // another way of doing concat

// JOIN
console.log('== JOIN ==');
console.log(arr2.join(', ')); */


// ## Looping arrays - forEach (break and continue don't work here)
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, transaction] of movements.entries()) {
  if (transaction > 0) {
    console.log(`${i+1}: You deposited ${transaction}`);
  } else {
    console.log(`${i+1}: You withdraw  ${Math.abs(transaction)}`);
  }
}
console.log('== FOREACH ==');
movements.forEach( (transaction, i, arr) => {
  transaction > 0 ? console.log(`${i+1}: Deposit  => ${transaction}`) : 
    console.log(`${i+1}: Withdraw => ${Math.abs(transaction)}`);
}); */

// ## forEach with maps and sets
/* 
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach( (value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'USD', 'GBP', 'EUR', 'GBP']);
console.log(currenciesUnique);
currenciesUnique.forEach( (value, key, set) => {
  console.log(`${key}: ${value}`);
}); */

//  CHALLENGE 1
/* 
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const julia1 = [9, 16, 6, 8, 3];
const kate1 = [10, 5, 6, 1, 4];

const checkDogs = (dJulia, dKate) => {
  const cleanJulia = dJulia.slice(1, -2);
  const fullData = [...cleanJulia, ...dKate];
  fullData.forEach((dog, i) => {
    console.log(`Dog ${i+1} is ${dog >= 3 ? 'an adult' : 'a puppy'} and is ${dog} years old!`);
  });
}
checkDogs(julia, kate);
console.log('== second data ==');
checkDogs(julia1, kate1); */

// ## Map Method
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToETB = 54.91;

const movementsETB = movements.map(move => move * eurToETB);
console.log(movementsETB);

const moveDesc = movements.map((move, i) => move > 0 ? `${i+1}: Deposit  => ${move}` : 
`${i+1}: Withdraw => ${Math.abs(move)}`);
console.log(moveDesc); */

// ## Filter Method
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = movements.filter(move => move > 0 ); 
const withdrawal = movements.filter(move => move < 0 ); 
console.log(deposit, withdrawal); */

// ## Reduce Method
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function(acc, move, i, arr) { 
  return acc+ move
}, 0); // 0 is the initial value of the accumulator(acc)acc+ move
console.log(`Current Balance: ${balance}`);
const totalDeposit = movements
  .filter(move => move > 0 )
  .reduce((acc, move) => move + acc );
console.log(`Total Deposit: ${totalDeposit}`);

const maxMove = movements.reduce((acc, move) => acc > move ? acc : move);
console.log(maxMove);
const minDeposit = movements
  .filter(move => move > 0)
  .reduce((acc, move) => acc < move ? acc : move);
console.log(minDeposit); */

// ## Chaining Methods
/*   
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const final = movements
  .filter(move => move > 0 )
  .map(move => move * 1.1)
  .reduce((acc, move) => move + acc );

console.log(final); */

// ## Some and Every
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// Check Equality
console.log(movements.includes(-130)); // Checks if there is that exact value exists

// Check condition
console.log(movements.some(mov => mov > 0)); // Checks if there are any deposits

// Check if all items meet the condition
console.log(movements.every(mov => mov > 0)); // Checks if all movements are deposits
console.log(account4.movements.every(move => move > 0));

// separate callback
console.log('===');
const deposit = move => move > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

// ## Flat and Flatmap
/* 
const arr = [[1, 2, 3], 4, 5, [6, 7, 8], 9];
const arr2 = [[1, 2, 3], 4, 5, [6, 7, [8, 9]], 10];
console.log(arr.flat());
console.log(arr2.flat());
console.log(arr2.flat(2));

const bankMovements = accounts.map(acc => acc.movements);
console.log(bankMovements.flat());
console.log(accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((accumulate, move) => accumulate + move, 0)
);

console.log('Option 2...');
console.log(accounts
  .flatMap(acc => acc.movements)
  .reduce((accumulate, move) => accumulate + move, 0)
); */

// ## Sorting Arrays
/* 
// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort()); // doesn't work as expected, sorts as if it's a string
console.log(movements.sort((a, b) => {
  return a > b ? 1 : -1;
})); // Sorts in ascending order
console.log(movements.sort((a, b) => {
  return a < b ? 1 : -1;
})); // Sorts in descending order 
console.log(movements.sort((a, b) => b - a)); // Another way to Sort in descending order 

// Strings
const owners = accounts.map(acc => acc.owner);
console.log(owners);
console.log(owners.sort()); */

// ## Create and Fill Arrays
/* 
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);

// Empty arrays
const emptyArr = new Array(7)
console.log(emptyArr);
// emptyArr.fill(1) //Fills all 7 elements with 1
emptyArr.fill(1, 3, 5);
console.log(emptyArr);

arr1.fill(44, 2, 5);
console.log(arr1);

// Array.from
const arr2 = Array.from({length: 7}, () => 1);
console.log(arr2);
const arr3 = Array.from({length: 7}, (cur, i) => i + 1);
console.log(arr3);

labelBalance.addEventListener('click', function (e) {
  const movesUI = Array.from(document.querySelectorAll('.movements__value'), (el) => Number(el.textContent.replace('$', '')));
  console.log(movesUI);
}) */

// ## Array methods practice
/* 
// Total Bank Deposits
const bankDeposit = accounts.flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((accumulate, mov) => accumulate + mov , 0);
console.log(bankDeposit);

// Count Deposits with value > 1000
// const highBankDeposit = accounts.flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000)
//   .length;
// Other way of doing the above
const highBankDeposit = accounts.flatMap(acc => acc.movements)
  .reduce((count, mov) => mov > 1000 ? ++count : count, 0);
console.log(highBankDeposit);

// Creating objects using reduce
const {deposits, withdrawals} = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, mov) => {
    mov > 0 ? (sums.deposits += mov) : (sums.withdrawals += mov);
    // sums[mov > 0 ? 'deposits' : 'withdrawals'] += mov;
  }, 
  {deposits: 0, withdrawals: 0});
console.log(deposits); */