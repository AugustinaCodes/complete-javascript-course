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

// Video lectures for the project:

// CREATING DOM ELEMENTS

// writing code here in the global scope is usually not a good practice so it's best to write a function

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
//calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};
//calcDisplaySummary(account1.movements);

// in this for each function, we want to produce a side effect so we are actually doing something to the account object and there is no need to return anything (as we are modifying an object)
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;
// if we observe the behavior of button click, notice that it's in the form element. So when we press the button, the page reloads. So we need to stop that from happening
btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // blur method makes the focus disappear
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(currentAccount);

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    console.log(index);
    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - does not change the original array
console.log(arr.slice(2));
// just like in strings, the end parameter is not included in the output
console.log(arr.slice(2, 4));
// this takes the last two elements of the array
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// same thing, creating a shallow copy:
console.log(arr.slice());
console.log([...arr]);

// SPLICE - changes the original array (mutates the array)
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE - does mutate original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT - does NOT mutate original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
// result is a string with the separator we specified
console.log(letters.join(' - '));

// THE NEW AT METHOD
const arr3 = [23, 11, 64];
console.log(arr3[0]);
// same thing but with the at method:
console.log(arr3.at(0));

// getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
// but with at method:
console.log(arr3.at(-1));
console.log(arr3.at(-2));

// the at method also works on strings
console.log('jonas'.at(0));
console.log('jonas'.at(-1));

// LOOPING ARRAYS - FOR EACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// how we access the counter variable in for of loop:
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// for each is technically a higher-order function
// in the forEach method, it will pass the array's each element into the function as an argument
console.log('------------FOR EACH ---------------');

movements.forEach(function (mov, i, arr) {
  // for each passes, the current element, the index and the entire array that we are looping
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// FOR EACH WITH MAPS AND SETS

// Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  // a set does not have keys and it does not have indexes either
  console.log(`${_}: ${value}`);
});

console.log('-----------CODING CHALLENGE #1----------------');

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsOnlyJulia = dogsJulia.slice(1).slice(0, -2);
  const juliaAndKateData = [...dogsOnlyJulia, ...dogsKate];

  juliaAndKateData.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`,
      );
    } else if (dogAge < 3) {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];
checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);

console.log('-----------CODING CHALLENGE #1 END----------------');
console.log('-----------CODING CHALLENGE #2----------------');

// ///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4,
  );
  const adultDogs = humanAges.filter(dogAge => dogAge >= 18);
  // const averageAge =
  //   adultDogs.reduce((acc, dogAge) => acc + dogAge, 0) /
  //   adultDogs.length;
  // another way:
  const averageAge = adultDogs.reduce(
    (acc, dogAge, i, arr) => acc + dogAge / arr.length,
    0,
  );
  return averageAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

console.log('-----------CODING CHALLENGE #2 END----------------');

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAgeChained = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(dogAge => dogAge >= 18)
    .reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);
console.log(calcAverageHumanAgeChained([5, 2, 4, 1, 15, 8, 3]));

// DATA TRANSFORMATIONS: MAP, FILTER, REDUCE

// THE MAP METHOD
// returns a new array with new elements
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// simplifying the function even further:
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

// if would be using for of loop:
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`,
);

console.log(movementsDescriptions);

// THE FILTER METHOD

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

// if using for of loop:
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// THE REDUCE METHOD

// accumulator is like a snowball
// to the reduce method we also pass a second parameter, which is basically the initial value of the accumulator at the very beginning of the iteration
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration number ${i}: ${acc}`);

//   return acc + cur;
// }, 0);

// using arrow function:
// here the accumulator keeps track of the current sum
const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

// using the for of loop now
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value
// and here the accumulator keeps track of the current maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

// we should always think what the accumulator and the core value to be and how they should interact

// Chaining methods

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // if we want to see the result of the previous method, we can check the array of the next method:
  .map((mov, i, arr) => {
    //console.log(arr);
    return mov * eurToUsd;
  })
  //.map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

// THE FIND METHOD

// the find method returns only the first element of the array that satisfied the condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// The new findLast and findLastIndex Methods - counts from the end

console.log(movements);
// Looks from the end of the array
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000,
);
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`,
);

// SOME AND EVERY METHODS

// SOME method
// EQUALITY
console.log(movements.includes(-130));

// with SOME, we can pass a condition; CONDITION, if there is any value for which this condition is true, then the some method will return true
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

// EVERY method
// only returns true if all of the elements in the array satisfy the condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));

// FLAT AND FLATMAP METHODS
const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr4);
console.log(arr4.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// The flat method only goes one level deep when flattening the array
// That's why we have the depth argument:
console.log(arrDeep.flat(2));
// flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// We often map the values then flat them. Hence why the flatMap method was introduced. Combines flat and map method into one

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
//flatMap method only goes down 1 level deep, so if you need to go down more levels deep, you will need to use the flat method as well

console.log('----------CODING CHALLENGE #4 START--------------');
///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"

// const huskyWeight = function (breeds) {
//   const husky = breeds.find(breed => breed.breed === 'Husky');
//   return husky.averageWeight;
// };
// console.log(huskyWeight(breeds));

// video solution
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)

// const dogBothActivities = function (breeds) {
//   const activities = breeds.find(
//     breed =>
//       breed.activities.includes('fetch') &&
//       breed.activities.includes('running'),
//   );
//   return activities.breed;
// };
// console.log(dogBothActivities(breeds));

// video solution:
const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('fetch') && breed.activities.includes('running'),
).breed;
console.log(dogBothActivities);

// 3. Create an array "allActivities" of all the activities of all the dog breeds

const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.

const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// const swimmingAdjacent = function (breeds) {
//   const swimmingActivity = breeds.filter(breed =>
//     breed.activities.includes('swimming'),
//   );
//   const activitiesOnly = swimmingActivity.flatMap(breed => breed.activities);
//   const uniqueActivities = [...new Set(activitiesOnly)];
//   console.log(uniqueActivities);
//   const otherActivities = uniqueActivities.filter(
//     activity => activity !== 'swimming',
//   );
//   return otherActivities;
// };
// console.log(swimmingAdjacent(breeds));

// video solution
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities),
  ),
].filter(activity => activity !== 'swimming');
console.log(swimmingAdjacent);

// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// const averageOfTen =
//   breeds.reduce((acc, breed, arr) => acc + breed.averageWeight, 0) /
//   breeds.length;
// console.log(averageOfTen >= 10);

// video solution
console.log(breeds.every(breed => breed.averageWeight >= 10));

// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
const activeDogs = breeds.filter(breed => breed.activities.length >= 3);

console.log(activeDogs.length > 0);

// video solution
console.log(breeds.some(breed => breed.activities.length >= 3));

// BONUS
// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeights);
console.log(heaviestFetchBreed);

console.log('----------CODING CHALLENGE #4 END--------------');
