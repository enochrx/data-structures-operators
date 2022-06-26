'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
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

//////////////////////////////////////////////////
//Destructing Array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [j, k, l] = arr;
console.log(j, k, l);
console.log(arr);

let [main, , , side] = restaurant.categories;
console.log(main, side);

[main, side] = [side, main];
console.log(main, side);

//receiving 2 return values from a function
const [mainMeal, sideMeal] = restaurant.order(3, 1);
console.log(mainMeal, sideMeal);

//nested destructing
const nested = [5, 8, [4, 7]];
const [d, , [e, f]] = nested;
console.log(d, e, f);

//setting default values for array destructing
const [g = 1, h = 1, i = 1, m = 1] = [3, 9];
console.log(g, h, i, m);

/////////////////////////////////////////////////
//Destructing objects
const { name, openingHours, categories } = restaurant;
