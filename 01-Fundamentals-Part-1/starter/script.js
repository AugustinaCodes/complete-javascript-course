// Assignments

//  VALUES AND VARIABLES

/**
 * 1. Declare variables called country, continent, and population and assign their values according to your own country (population in millions)
 * 2. Log their values to the console
 */

let country = "Lithuania";
let continent = "Europe";
let population = 3000000;
console.log(country);
console.log(continent);
console.log(population);

// DATA TYPES

/**
 * 1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet
 * 2. Log the types of isIsland, population, country and language to the console
 */

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var

/**
 * 1. Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one)
 * 2. Think about which variables should be const variables (which values will never change, and which might change?). Then change these variables to const.
 * 3. Try to change one of the changed variables now, and observe what happens.
 */

language = "Lithuanian";
const country2 = "Lithuania";
const continent2 = "Europe";
const isIsland2 = false;

// isIsland2 = true

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Smith";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2018);

// BASIC OPERATORS

/**
 * 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
 * 2. Increase the population of your country by 1 and log the result to the console
 * 3. Finland has a population of 6 million. Does your country have more people than Finland?
 * 4. The average population of a country is 33 million people. Does your country have less people than the average country?
 * 5. Based on the variables you created, create a new variable description which contains a string with this format: "Portugal is in Europe, and its 11 million people speak portuguese"
 */

const splitPopulation = population / 2;
console.log(splitPopulation);
population++;
console.log(population);
const morePeopleThanFinland = population > 6000000;
console.log(morePeopleThanFinland);
const lessPeopleThanAverageCountry = population < 33000000;
console.log(lessPeopleThanAverageCountry);
const description =
  country2 +
  " is in " +
  continent2 +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

const firstNames = "August";
const job = "teacher";
const birthYear = 1995;
const year = 2037;

const august =
  "I'm " + firstNames + ", a " + (year - birthYear) + " old " + job + "!";
console.log(august);

// Template Literals

const augustNew = `I'm ${firstNames}, a ${year - birthYear} old ${job}!`;
console.log(augustNew);

// IF ELSE

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear2 = 1995;
let century;
if (birthYear2 <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// Type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("John"));
console.log(typeof NaN);

console.log(String(23), 23);

//   type coercion
console.log("I am " + 23 + " years old");
console.log("23" - " 10" - 3);
console.log("23" * "2");

// 5 falsy values are: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("Height is UNDEFINED");
}

const age2 = 18;
if (age2 === 18) console.log("You just became an adult");

// const favourite = prompt("What's your favorite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool, 23 is an amazing number!");
// }

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false;

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

const day = "Monday";

switch (day) {
  case "Monday": //day === 'Monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
  default:
    console.log("Not a valid day");

    break;
}

// ternary operator
const ages = 23;
// ages >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = ages >= 18 ? "wine" : "water";

console.log(drink);

console.log(`I like to drink ${ages >= 18 ? "wine" : "water"}`);
