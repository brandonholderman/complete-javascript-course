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

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({time, address, starterIndex, mainIndex}) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} will be delivered 
      to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Dexter Ave N',
  mainIndex: 2,
  starterIndex: 2,
})

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring an array
const [x, y ,z] = arr;

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
const {name, categories, openingHours} = restaurant;
console.log(name, categories, openingHours);

// Assigning object keys to variables
const {
  name: restaurantName, 
  categories: cuisine, 
  openingHours: hours
} = restaurant;
console.log(restaurantName, cuisine, hours);

// Assigning default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let d = 111;
let f = 999;
console.log(d, f);

const obj = {d: 23, f: 7, t: 14};
({d, f} = obj);
console.log(d, f); // Returns value after mutation

// Nested objects
const {fri: {open, close}} = openingHours;
console.log(open, close);

// Using the spread operator
const myArr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Adding new values using the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // returns [1, 2, 7, 8, 9]

const newMenu = [...restaurant.mainMenu, `Gnocchi`];
console.log(newMenu);

const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);