'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// another ES6 enhancement:

const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// ENHANCED OBJECT LITERALS

const openingHours2 = {
  [weekdays2[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays2[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours2,
  // ES6 enhancement, no need to write the word function for object methods
  order(startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },

  orderDelivered: function ({
    startedIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log(restaurant);

// Object destructuring

restaurant.orderDelivered({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  startedIndex: 2,
});

restaurant.orderDelivered({
  address: 'Via del Sole, 21',
  startedIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };
// REASSIGNING THE VALUES, use brackets because if we start with {}, then js expects a code block
({ d, e } = obj);
console.log(d, e);
console.log(obj);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Array destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);
// the original array is not affected
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
// Immediately creating two variables out of a function call:
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

// Assignment practice
// Destructure books array into two variables
const books = [
  'Harry Potter',
  'Dune',
  'Twilight',
  '1991',
  'Vampire Diaries',
  'Hunger Games',
  'Learning',
];
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);
const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Destructuring objects practice

const books2 = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    isbn: '978-0747532699',
    keywords: ['magic', 'wizard', 'fantasy'],
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    isbn: '978-0441172719',
    keywords: ['science fiction', 'desert', 'politics'],
  },
  {
    title: 'Twilight',
    author: 'Stephenie Meyer',
    isbn: '978-0316015844',
    keywords: ['vampires', 'romance', 'fantasy'],
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    isbn: '978-0547928227',
    keywords: ['adventure', 'dragons', 'fantasy'],
  },
  {
    title: '1984',
    author: 'George Orwell',
    isbn: '978-0451524935',
    keywords: ['dystopia', 'politics', 'surveillance'],
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0743273565',
    keywords: ['wealth', 'love', 'the American Dream'],
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: '978-0141439518',
    keywords: ['romance', 'marriage', 'social class'],
    language: 'English',
  },
];

const { title, author, isbn } = books2[0];
console.log(title, author, isbn);
// each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property
const { keywords: tags2 } = books2[0];
console.log(tags2);

// the seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object into variables called language and programmingLanguage. Assign programmingLanguage variable with a default value of 'unknown').
const { language, programmingLanguage = 'unknown' } = books2[6];
console.log(language, programmingLanguage);

// below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books2[0]);
console.log(bookTitle, bookAuthor);

// each book has a deeply nested rating property. Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books2[0];
console.log(bookRating);

// write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book. if year is undefined, it should be assigned with a default value of 'year unknown'.

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo(books2[2]);

// The spread operator

const arr3 = [7, 8, 9];
const badNewArr = [1, 2, arr3[0], arr3[1], arr3[2]];
console.log(badNewArr);

const newArr3 = [1, 2, ...arr3];
console.log(newArr3);
console.log(arr3);

console.log(...newArr3);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu2);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// this is not going to work:
//console.log(`${...str} wj`);

// real-world example
// const ingredients = [
//   prompt('Let\s make pasta! Ingredient 1?'),
//   prompt('Let\s make pasta! Ingredient 2?'),
//   prompt('Let\s make pasta! Ingredient 3?'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// the spread operator also works on objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// REST PATTERN AND PARAMETERS

// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr4 = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [g, h, ...others] = [1, 2, 3, 4, 5];
console.log(g, h, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x2 = [23, 5, 7];
add(...x2);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// extra assignment practice

// spread operator

// each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author
// declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays)

const bookAuthors = [...books2[0].author, ...books2[1].author];

// write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

const spellWord = function (string) {
  console.log(...string);
};
spellWord('JavaScript');

// rest pattern and parameters practice

// destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array)

const { mainKeyword, ...rest } = books2[0].keywords;

// destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the res of the properties to the restOfTheBook variable.

const { publisher: bookPublisher, ...restOfTheBook } = books2[1];

// write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book ${title}, has ${authors.length} authors`);
};
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// SHORT CIRCUITING (&& AND ||)

console.log('--------OR-----------');

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(null || undefined);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// if guests doesn't exist, then set the default value to 10
//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------AND-----------');
// when the first value is truthy, the evaluation continues and the last value is returned
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// short circuiting practice && and ||

// 5.1
const hasExamplesInJava = function (books) {
  // OR books.programmingLanguage === 'Java' || 'no data available'
  return books.programmingLanguage === 'Java' ? true : 'no data available';
};

// 5.2
const hasOnlineContent = function (...books) {
  for (let i = 0; i < books.length; i++) {
    return (
      books[i].onlineContent &&
      console.log(`${books[i].title} provides online content`)
    );
  }
};

// THE NULLISH COALESCING OPERATOR ??

// if we log this to 0, because it's a falsy value, we will get 10 even though the number is actually 0
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

// Nullish: null and undefined (NOT 0 or '')
// So with the ?? 0 and '' act like truthy values
// only the nullish values will short circuit the evaluation here
// if the value would be null or undefined, only then the second operand will execute
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// LOGICAL ASSIGNMENT OPERATORS

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;
// can also use this:
// nullish assignment operator:
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// && assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);

console.log('------CODING CHALLENGE');
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1. Create one player array for each team (variables 'players1' and 'players2')
// my version:
// const [...players1] = game.players[0];
// const [...players2] = game.players[1];
// better one:
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//const { team1, x: draw, team2 } = game.odds;
// better to do nested destructuring:
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
const printGoals = function (...players) {
  let str = 'The game was played by ';
  for (let i = 0; i < players.length; i++) {
    str += `${players[i]}, `;
  }
  str += `and the number of goals scored was ${players.length}`;
  console.log(str);

  return str;
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
const teamLikelyToWin = team1 < team2 && `${game.team1} is more likely to win`;
console.log(teamLikelyToWin);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// Looping arrays - The for-of Loop

const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu3) console.log(item);

for (const [i, el] of menu3.entries()) {
  //console.log(i, el);
  console.log(`${i + 1}: ${el}`);

  // console.log(item);
  // console.log(`${item[0] + 1}: ${item[1]}`);
}

//console.log(...menu3.entries());

// OPTIONAL CHAINING
// only if Monday exists, then this open property will be read, but if not, immediately undefined will be returned
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // openingHours.mon openingHours.tue etc
  console.log(`On ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

// LOOPING OBJECTS - OBJECT KEYS, VALUES AND ENTRIES
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open at ${open} and close at ${close}`);
}

// more practice assignments
// nullish operator
// 6.1
for (let i = 0; i < books2.length; i++) {
  books2[i].onlineContent ??
    console.log(
      `''${books2[i].title}'' provides no data about its online content`,
    );
}

// logical assignment operators
// 7.1
for (let i = 0; i < books2.length; i++) {
  books2[i].edition ||= 1;
}

// 7.2
// Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false
// soltution:
for (let i = 0; i < books2.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}
