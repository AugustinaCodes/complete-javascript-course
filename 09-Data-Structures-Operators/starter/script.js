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

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startedIndex, mainIndex) {
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
const [x, y, z] = arr;
console.log(x, y, z);
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
