"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = "Audio"
//const private = 534
//const if = 23

// FUNCTIONS

function logger() {
  console.log("My name is August");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// function declaration

const age1 = calcAge1(1995);
console.log(age1);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1995);
console.log(age2);

// arrow functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`;
};
const age4 = yearsUntilRetirement(1995, "Augustina");
console.log(age4);

// functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor2(2, 3));

// ARRAYS

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstNamez = "Jonas";
const jonas = [firstNamez, "Smith", 2037 - 1991, "teacher", friends];

console.log(jonas);

// BASIC ARRAY OPERATIONS - METHODS

// Add elements

const friends2 = ["Michael", "Steven", "Peter"];
// Push method adds elements to the end of an array
const newLength = friends2.push("Jay");
console.log(friends2);
console.log(newLength); //returns the new length of the mutated array

// Unshift method adds elements to the beginning of an array
friends2.unshift("John");
console.log(friends2);

// Remove elements

// Pop method removes the last element of the array
friends2.pop();
const removedElement = friends2.pop(); //returns the removed element
console.log(friends2);
console.log(removedElement);

// Shift removed the first element of an array
friends2.shift();
console.log(friends2);
// returns the index of where this element is located at
console.log(friends2.indexOf("Steven"));
console.log(friends2.indexOf("Bob")); // -1

// Tells if the elements is in array or not
// Uses strict equality check
console.log(friends2.includes("Steven"));
console.log(friends2.includes("Bob"));
friends2.push(23);
console.log(friends2.includes("23"));
console.log(friends2.includes(23));

friends2.push("Peter");
if (friends2.includes("Peter")) {
  console.log("You have a friend called Peter");
}

// OBJECTS

const jonas2 = {
  firstName: "Jonas",
  lastName: "Smith",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas2);

// dot vs bracket notation
// getting property from the object
console.log(jonas2.lastName);
console.log(jonas2["lastName"]);

const nameKey = "Name";
console.log(jonas2["first" + nameKey]);
console.log(jonas2["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends",
);
console.log(interestedIn);
// we get undefined when we try to access a property in an object that does not exist
console.log(jonas2.interestedIn);
console.log(jonas2[interestedIn]);

if (jonas2[interestedIn]) {
  console.log(jonas2[interestedIn]);
} else {
  console.log("Wrong request");
}

// adding properties
jonas2.location = "Portugal";
jonas2["twitter"] = "@jonassmith";
console.log(jonas2);

// challenge
// "Jonas has 3 friends and his best friend is called Michael"

const challenge = `${jonas2.firstName} has ${jonas2.friends.length} friends and his best friend is called ${jonas2.friends[0]}`;
console.log(challenge);

// OBJECT METHODS
const jonas3 = {
  firstName: "Jonas",
  lastName: "Smith",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    console.log(this);
    return this.age;
  },
  getSummary: function () {
    const summary = `${this.firstName} is a ${this.calcAge()} year old teacher, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
    //console.log(summary);

    return summary;
  },
};
// any function that is attached to the object is called a method
console.log(jonas3);
console.log(jonas3.calcAge());
console.log(jonas3["calcAge"](1991));
console.log(jonas3["calcAge"]());
console.log(jonas3.age);

// Challenge
// "Jonas is a 46 year old teacher, and he has a drivers license"

console.log(jonas3.getSummary());

// THE FOR LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
  "Jonas",
  "Smith",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // reading from the array
  console.log(jonasArray[i], typeof jonasArray[i]);
  // filling types array
  //types[i] = typeof jonasArray[i];
  //    or
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years2 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years2.length; i++) {
  ages2.push(2037 - years2[i]);
}

console.log(ages2);

// continue and break

console.log("ONLY STRINGS");

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("BREAK WITH NUMBER");

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// looping backwards
console.log("LOOPING BACKWARDS");

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

//loops inside loops
console.log("LOOPS INSIDE LOOPS");

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---------starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
  }
}

// WHILE LOOP
console.log("WHILE LOOOP");

let rep2 = 1;
while (rep2 <= 10) {
  console.log(`Lifting weights repetition ${rep2}`);
  rep2++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
