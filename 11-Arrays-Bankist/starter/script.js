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


// BUILDING THE APPLICATION
containerApp.style.opacity = 1;

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((move, i) => {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${Number(i) + 1} ${type.toUpperCase()}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${move} $</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}
displayMovements(account1.movements);

const createUsernames = (account) => {
  accounts.forEach(account=>{
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const calculateBalance = function (movements) {
  const balance = movements.reduce((acc, move) => acc + move);
  labelBalance.innerHTML = '' + balance;
}
calculateBalance(account1.movements);

const calculateSummary = function (movements) {
  const deposit = movements.filter(move => move > 0 )
    .reduce((acc, move) => acc + move, 0); 
  labelSumIn.innerHTML = '$ ' + deposit;
  const withdrawal = movements.filter(move => move < 0 )
    .reduce((acc, move) => acc + move, 0); 
  labelSumOut.innerHTML = '$ ' + Math.abs(withdrawal);
  const interest = movements.filter(move => move > 0 )
    .map(depo => depo * 0.065)
    // .filter(int => int > 10)
    // .reduce((acc, move) => acc + move, 0);
    .reduce((acc, int) => int > 10 ? acc + int : acc, 0);
  labelSumInterest.innerHTML = '$ ' + interest;
}
calculateSummary(account1.movements);









/////////////////////////////////////////////////
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