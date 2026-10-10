'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age} born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       //   creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       //   Reassigning outer scope's variable
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //console.log(str);
//     console.log(millennial);
//     //console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// //console.log(age);
// // printAge();

// HOISTING IN PRACTICE

// variables

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // functions

// console.log(addDecl(2, 3));
// //console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3)); same as undefined(2, 3) because var gives undefined
// //console.log(addArrow);

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted`);
// }

// // the function deleteShoppingCart() was called, because of hoisting and using var. var is declared after it's called, so it becomes undefined, falsy, hence the function then gets called

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.x);
// console.log(z === window.x);

// // THIS keyword

// console.log(this);
// const calcAge2 = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge2(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// // f();

// // regular functions vs arrow functions

// var firstName = 'Matilda';

// const jonas2 = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // preserving the this keyword
//     // const self = this; //self or that
//     // const isMillennial = function () {
//     //   console.log(self);
//     //   //console.log(this.year >= 1981 && this.year <= 1996);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillennial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillennial();
//   },
//   // best practice, NEVER use an arrow function as a method
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas2.greet();
// console.log(this.firstName);
// jonas2.calcAge();

// // arguments keyword
// const addExpression = function (a, b) {
//   console.log(arguments);

//   return a + b;
// };
// addExpression(2, 3);
// addExpression(2, 5, 8, 12);

// // the arrow function also does not the the arguments keyword
// var addArrow2 = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow2(2, 5);

// OBJECT REFERENCES IN PRACTICE - SHALLOW VS DEEP COPIES

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// // this did not create a new object. It's exact same object in the heap
// const marriedJessica = jessica;
// // we can still change property value. We are not changing the memory address here. we could not assign a brand new object here when using const
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

// creating NEW objects (not references)

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'], //arrays are objects, so this is in the heap, hence when we apply changes even to the copy made with the spread operator, then it will change both the original and copied object array
};

// spread operator - shallow copy
// this creates a new object in the heap, not a reference. We keep the original object intact
const jessicaCopy = { ...jessica }; //the spread operator only copies the first level of the object but NOT the nested object
jessicaCopy.lastName = 'Davis';

// console.log(jessica, jessicaCopy);
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// deep copy (deep clone)

const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Before clone:', jessica);
console.log('After clone:', jessicaClone);
