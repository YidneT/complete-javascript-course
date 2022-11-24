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

const clearInput = function(input){
  if (Array.isArray(input)) {
    input.forEach(element => {
      element.value = '';
    });
  } else {
    element.value = '';
  }
}

// Login Users
let loggedInUser = account2;

const authUser = function (user, pin) {
  return accounts.find(account => account.username === user && account.pin === Number(pin));  
}

const loginUser = function (account) {
  displayAccountDetails(account);
  populateHeader(account);
  containerApp.style.opacity = 1;
  console.log(accounts);
}

const populateHeader = function (account) {
  labelWelcome.innerHTML = `Howdy ${account.owner}`;
  clearInput([inputLoginUsername, inputLoginPin]);
  /* document.querySelector('nav').style.display = 'none';
  const greetings = `
    <div style=" display: flex; justify-content: space-between; width: 100%; ">
      <h2>Howdy ${account.owner}</h2>
      <button class="login__btn" style=" font-size: 150%; ">Logout 👋</button>
    </div>
  `;
  document.querySelector('body').insertAdjacentHTML("afterbegin", greetings); */
}

const populateMovements = function (account) {
  const movements = account.movements;
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
    .reduce((acc, move) => acc + move, 0);
  labelBalance.innerHTML = balance;
  account.balance = balance;
  const deposit = movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.innerHTML = deposit;
  account.deposit = deposit;
  const withdrawal = Math.abs(
    movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0)
  );
  labelSumOut.innerHTML = withdrawal;
  account.withdrawal = withdrawal;
  const interest = movements
    .filter(move => move > 0)
    .map(move => move * account.interestRate/100)
    .reduce((acc, move) => acc + move, 0);
  labelSumInterest.innerHTML   = interest;
  account.interest = interest;
}

const displayAccountDetails = function (account) {
  populateMovements(account);
  populateSummary(account);
}

const submitLogin = function (e) {
  const user = inputLoginUsername.value;
  const pin = inputLoginPin.value;
  loggedInUser = authUser(user, pin);
  if (loggedInUser) {
    loginUser(loggedInUser);
    console.log(loggedInUser);    
  } else {
    inputLoginUsername.style.borderColor = 'red';
    inputLoginPin.style.borderColor = 'red';
    console.log('Incorect details');    
  }
  e.preventDefault();
}
btnLogin.addEventListener('click', submitLogin);

const transferPayment = function (e) {
  const transferTo = inputTransferTo.value;
  const transferAmount = Number(inputTransferAmount.value);
  const accTo = accounts.find(acc => acc.username === transferTo);

  if(transferTo !== loggedInUser.username && accTo !== undefined){
    if (transferAmount > 0 && transferAmount < loggedInUser.balance) {
      loggedInUser.movements.push(transferAmount * -1);
      accTo.movements.push(transferAmount);
      displayAccountDetails(loggedInUser);
      clearInput([inputTransferTo, inputTransferAmount]);
      document.querySelector('.operation--transfer').insertAdjacentHTML("beforeend", `<p style="color: green">Submited $ ${transferAmount} to ${accTo.owner} succesfuly</p>`);
      console.log(accounts);
    } else {
      document.querySelector('.operation--transfer').insertAdjacentHTML("beforeend", `<p style="color: red">Transfer amount error!</p>`);
    }
  } else{
    this.style.backgroundColor = 'red';
    console.log('Incorect details');
  }
  // console.log(transferTo, transferAmount);
  e.preventDefault();
}
btnTransfer.addEventListener('click', transferPayment);

/* Temporary */
loginUser(loggedInUser);
/* Temporary */


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
