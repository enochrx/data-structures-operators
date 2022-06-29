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
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  //practical example
  orderDelivery: function ({ address, time, mainIndex, starterIndex }) {
    console.log(
      `Hello, We got your order for ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} on the side, to be delivered by ${time} to ${address}, thanks for shopping with us.`
    );
  },
  pastaOrderIngredients: function (ing1, ing2, ing3) {
    console.log(
      `The Pasta you ordered was prepared with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  address: '2, Raddington Close, Beachway, LA',
  time: '3:00',
  starterIndex: 3,
  mainIndex: 1,
});
//////////////////////////////////////////////////
//Destructing Array
const arr = [2, 3, 4];
// const aa = arr[0];
// const bi = arr[1];
// const cg = arr[2];

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
console.log(name, openingHours, categories);

//reassigning name to destructing object
const {
  name: restaurantName,
  openingHours: hours,
  mainMenu: course,
} = restaurant;
console.log(restaurantName, hours, course);

//setting default values with [] for object destructing`, which is very helpful when we do not have our data hard-coded and we need to fetch them from somewhere else like API etc
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let ray = 59;
let eno = 54;
const roj = { ray: 56, eno: 48 };
({ ray, eno } = roj); //wrapped with parentheses
console.log(ray, eno);

//nested object for destructing
const {
  thu: { open: o, close: c },
} = openingHours;
console.log(o, c);

//Spread operator
const arry = [4, 5, 6];
const badWayArry = [2, 3, arry[0], arry[1], arry[2]]; //old way of merging arrays
console.log(badWayArry);

//New way of merging in ES6 is by using spread operator (...)
const newArry = [2, 3, ...arry];
console.log(newArry);

//SPread operator is mostly used to get data separated by coma out of an array just like destructing and they do not create new variables but rather take all the element out of the arrray
console.log(...newArry);

//Use case -- 1. to copy arrays, 2. to merge arrays
const categoriesCopy = [...restaurant.categories];
console.log(categoriesCopy);
const newSide = [...restaurant.starterMenu, 'Spinach'];
console.log(newSide);
const mergedMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mergedMenu);

//Spread operator actually works on all iterables which are all array, string, maps, sets but not objects and we can only use a spread operator only when building an array or when passing values into a function
const str = 'Raynoch';
const ltrs = [...str]; //an array of each alphabet in the name is created
console.log(ltrs);
console.log(...str);

// const ingredients = [
//   prompt('Making Pasta!, Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

//we use Spread operator to call the pastaIngredient
//restaurant.pastaOrderIngredients(...ingredients);

//otherwise, we use the conventional way of writing out all the vslues in the array, which can be very strenuous esp when there's so much data in the array
// restaurant.pastaOrderIngredients(
//   ingredients[0],
//   ingredients[1],
//   ingredients[2]
// );

//Object
const restaurantnew = { ...restaurant, foundedIn: 1991, Owner: 'Zanotti' };
console.log(restaurantnew);

//Rest Pattern; Is the opposite of spread operator, i.e they pack elements to firm an array while spread operator unpacks an array

//Spread operator because it's on the RIGHT side of the assignment operator =

const rig = [1, 2, 3, ...[5, 6]];

//Rest pattern because it's on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [, Bruschetta, ...otherMeal] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(Bruschetta, otherMeal);

//rest pattern for objects
const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log(sat, weekdays);
