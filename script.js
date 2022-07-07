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

  order(starterIndex, mainIndex) {
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

//Spread operator is mostly used to get data separated by coma out of an array just like destructing and they do not create new variables but rather take all the element out of the arrray
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

//Rest Pattern; Is the opposite of spread operator, i.e they pack elements to form an array while spread operator unpacks an array

//Spread operator because it's on the RIGHT side of the assignment operator = OR the side where the values are set

const rig = [1, 2, 3, ...[5, 6]];

//Rest pattern because it's on the LEFT side of = OR the variable name side
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

//Short-circuiting,  using OR|| operator will return only truthy values
console.log(3 || null);
console.log(undefined || 'rainbow');

restaurant.guestNumbr = 0;
// const guests = restaurant.guestNumbr || 20;
// console.log(guests);
// const guest = restaurant.guestNumbr ? restaurant.guestNumbr : 21;
// console.log(guest);
//first truthy value is return in short-circuiting

//Short-circuiting, using AND&& operator will return the first falsy value
console.log(undefined && 'Ray');
console.log(NaN && null);
console.log('red' && 3);

//Nullish coalescing operator '??' works with the idea of nullish values(Null & Undefined) rather than falsy values
const guests = restaurant.guestNumbr || 20;
console.log(guests);

const correctGuestNo = restaurant.guestNumbr ?? 25;
console.log(correctGuestNo);

//Coding challenge #1
/*We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'x' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored. */

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

//Solution
//Task 1
const [...player1] = game.players[0];
const [...player2] = game.players[1];
const [players1, players2] = game.players;
console.log(players1, players2);
console.log(player1);
console.log(player2);

//Task 2
const [gk, ...fieldplayers1] = game.players[0];
const [gk2, ...fieldPlayers2] = game.players[1];
console.log(gk, fieldplayers1);
console.log(gk2, fieldPlayers2);

//Task 3
const [...allPlayers] = [...players1, ...players2];
console.log(allPlayers);

//Task 4
const sub = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...game.players[0], ...sub];
const players1Finall = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//Task 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//Task 6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored `);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

//Task 7
team1 < team2 && console.log('Team 1 is likely to win');
team1 > team2 && console.log('Team 2 is likely to win');

//for-of loop
const mmenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const list of mmenu) console.log(list);

for (const [i, el] of mmenu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
//console.log([...mmenu.entries()]);

//Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//using optional chaining '?'
console.log(restaurant.openingHours.mon?.open);

//Practical application
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, We're opened by ${open}`);
}

//optional chaining is a new ES6 feature and it should be used alongside Nullish coalescing operator. It also has its application in calling methods for example

console.log(restaurant.order?.(1, 2)) ?? 'Method does not exist';

//Optional chaining is also very useful in arrays
const users = [{ name: 'ray', email: 'rayny@sp.io', net: 'billions' }];
console.log(users[0]?.net ?? 'Empty Array selection');

//Looping Object: Keys, Values and Entries
//Property NAME
const prop = Object.keys(openingHours);
console.log(prop);

let openingMessage = `We are open on ${prop.length} days`;
for (const day of prop) {
  openingMessage += `${day}`;
}

//Property VALUE
const value = Object.values(openingHours);
console.log(value);

//Entire object
const entries = Object.entries(openingHours);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we are open by ${open} and close by ${close}`);
}

//Introduction to Set --- all values are unique and so no repitition, also there is no need to get data out of Sets as the order in which they are written doesn not matter, all that is necessary is to check ig a value is present or not in a given set. If there is need to get a value out of a Set, then it's rather just easy to use an array instead
const orderSet = new Set([
  'Garlic',
  'Cucumber',
  'Cucumber',
  'Citrus',
  'Cabbage',
  'Carrot',
]);
console.log(orderSet);

//length of set
console.log(orderSet.size);

//adding to the set
orderSet.add('Diced Liver');

//to check if a nset has a value--- in arrays = array.include()
console.log(orderSet.has('Citus'));

//to delete from a set
orderSet.delete('Citrus');
console.log(orderSet);

//Sets are also iterable, so we can loop through
for (const order of orderSet) console.log(order);
