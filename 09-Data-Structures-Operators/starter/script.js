'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} will be delivered 
      to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Dexter Ave N',
  mainIndex: 2,
  starterIndex: 2,
});

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring an array
const [x, y, z] = arr;

// Both will return the same data
console.log(a, b, c);
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Swap category placement
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// Swap with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receives 2 return values from a function
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

// Destructuring nested array
const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Destructuring an object
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// Assigning object keys to variables
const {
  name: restaurantName,
  categories: cuisine,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, cuisine, hours);

// Assigning default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let d = 111;
let f = 999;
console.log(d, f);

const obj = { d: 23, f: 7, t: 14 };
({ d, f } = obj);
console.log(d, f); // Returns value after mutation

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Using the spread operator
const myArr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Adding new values using the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // returns [1, 2, 7, 8, 9]

// Add item to array
const newMenu = [...restaurant.mainMenu, `Gnocchi`];
console.log(newMenu);

// Join two arrays
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Brandon';
const letters = [...str, ' ', 'H.'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient1?"),
//   prompt("Let's make pasta! Ingredient2?"),
//   prompt("Let's make pasta! Ingredient3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, Founder: 'Guiseppe' };
console.log(newRestaurant);

// Changes restaurant name in copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

// Original object name still persists
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Rest Operator Destructuring

// Array examples
// Spread because ... is on right side of =
const numbersArr = [5, 6, 7];
const nonRestArr = [1, 2, 3, ...numbersArr];

// Rest becasue ... is on left side of =
// Rest will convert the rest of the items in the array into a new array or object
const [g, h, ...others] = [1, 2, 3, 4, 5, 6];
console.log(g, h, others);

// Rest operator needs to be the last item in the array
// Only one rest allowed in destructuring assignment
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ...otherFood);

// Object examples
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Rest Functions

const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

// Spread operator expands, Rest operator contracts
add(5, 4, 6, 7);

const p = [22, 19, 59];
add(...p);

restaurant.orderPizza('mushroom', 'olives', 'onion', 'spinach');

// Short-circuit evaluation
console.log(3 || 'Brandon');
console.log('' || 'Brandon');
console.log(true || 0);
console.log(undefined || null);

// Using || will evaluate conditions until it reaches a truthy value and will return that value
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// Using && will continue to evaluate consitions until it reaches a falsy value and will return that value
console.log('Hello' && 23 && null && 'Brandon');

// Practice example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza &&
  restaurant.orderPizza('mushroom', 'pickles', 'spinach');

// Nullish coelescing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish values: null or undefined
// Continues to evaluate if nullish value is found else returns falsy value
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
