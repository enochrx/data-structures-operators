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

/*/////////////////////////
//Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀*/

//1.
for (const [x, player] of game.scored.entries())
  console.log(`Goal ${x + 1} : ${player}`);

//2.
const values = Object.values(game.odds);
let average = 0;
for (const odd of values) average += odd;
average /= values.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const strTeam = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${strTeam} ${odd}`);
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

//Set--Use case
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiteir'];

const uniqueStaff = new Set(staff);
console.log(uniqueStaff);

console.log(new Set(staff).size);

//Maps
const term = new Map();
term.set('name', 'Spen');
term.set('open', 12);
term.set('close', 24);
term
  .set('fact', 'establish 2020')
  .set('yet', "we're not registered")
  .set(2, 'Raynoic')
  .set(true, "we're open")
  .set(false, "we're close");
console.log(term);

// we us .get method to retrive data from Maps
console.log(term.get(2));
console.log(term.get('open'));

//simple use case
const time = 11;
console.log(term.get(time > term.get(open) && time < term.get(close)));

//other Map methods
console.log(term.has('yet'));

console.log(term.size);
term.delete(2);

console.log(term);

//Other ways of passing data into a Map
const factPizza = new Map([
  [
    'Question',
    "Where's the best place to get the nicest Pizza and burger in Lagos",
  ],
  [1, 'Pizza Hut'],
  [2, 'Dominos Pizza'],
  [3, 'Debonairs Pizza'],
  ['Correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

console.log(factPizza);
console.log(factPizza.get('Question'));

for (const [key, value] of factPizza) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
/*const answer = Number(
  prompt("Where's the best place to get the nicest Pizza and burger in Lagos"));*/
const answer = 3;

console.log(factPizza.get(factPizza.get('Correct') === answer));

//convert map to arrays
console.log([...factPizza]);
console.log(factPizza.entries());
console.log(factPizza.keys());
console.log(factPizza.values());

/////////////////////////////////////////
//Coding CHallenge #3
/*Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL
GOOD LUCK*/
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...gameEvents.values()];
const eventSet = new Set(events);
console.log(eventSet);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

const timee = [...gameEvents.keys()].pop();
console.log(`An event happened, on
average, every ${timee / gameEvents.size} minutes`);

//4.
for (const [min, event] of gameEvents) {
  const half = min >= 45 ? 'SECOND' : 'FIRST';
  console.log(`[${half} HALF] ${min} : ${event} `);
}

//Working with strings
const space = 'Elon to the Moon';

//calling some method on the string as JS treats strings as objects in the background
console.log(space[2]);
console.log(space.indexOf('o'));
console.log(space.lastIndexOf('o'));
console.log(space.slice(5));
console.log(space.slice(5, 12));
console.log(space.length);

const seatChecker = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Middle Seat');
  else console.log('Got lucky');
};
seatChecker('32J');
seatChecker('45E');
seatChecker('5B');
seatChecker('28C');

//more on some string methods
console.log(space.toLowerCase());
console.log('Elon to the Moon'.toUpperCase());

//Use case --- to fix capitalization
const passenageName = 'jUDe oReOs';
const passengerLower = passenageName.toLowerCase();
const correctName =
  passenageName[0].toUpperCase() +
  passengerLower.slice(1, 5) +
  passenageName[5].toUpperCase() +
  passengerLower.slice(6);
console.log(correctName);

//Comparing emails --- intro trim() method
const email = 'hello@spens.io';
const inputEmail = ' HellO@sPens.IO \n';
const correctedEmail = inputEmail.toLowerCase().trim();
console.log(correctedEmail, correctedEmail === email);

//replacing
const priceBrit = '574,58E';
const priceUSA = priceBrit.replace('E', '$').replace(',', '.');
console.log(priceUSA);

//replacing a word in a string
const ann = 'Please, kindly ensure you use your seatbelt!, use your seatbelt!';

//replaceAll() is use to replace multiple occurences of the word, otherwise , we use 'regular expression'
console.log(ann.replaceAll('use', 'fasten'));
//Regular expression /use/g -- g = global, and it picks all occurences
console.log(ann.replace(/use/g, 'fasten'));

//Booleans
const flight = 'Boeing A345neo';
console.log(flight.includes('A34'));
console.log(flight.includes('Airbus'));
console.log(flight.startsWith('Boe'));
console.log(flight.endsWith('neo'));

if (flight.startsWith('Boeing') && flight.endsWith('neo')) {
  console.log('Your flight is a new generation BOEING plane');
} else console.log("We're not sure of the model of your flight");

//Practice exercise
const baggageScrutiny = function (items) {
  const adjusted = items.toLowerCase();
  if (adjusted.includes('gun') || adjusted.includes('knife')) {
    console.log('You are not allowed on this flight');
  } else console.log('Welcome aboard');
};

baggageScrutiny('I have my gadgets and some waffles and chicken');
baggageScrutiny('Some luggage of clothes and a GUn');
baggageScrutiny('A KnIFe and a gUn');
baggageScrutiny('A pair of sneakers');

//Using Split() --- an array is formed
console.log('a life abroad is so beautiful'.split(' '));
const [firstName, lastName] = 'Damilare_olaniran'.split('_');

const mrName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(mrName);

//to capitalize first letters of words
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpperCase = [];
  for (const n of names) {
    //namesUpperCase.push(n[0].toUpperCase() + n.slice(1));
    namesUpperCase.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpperCase.join(' '));
};
capitalizeName('joan smith anderson miguel');
capitalizeName('olaniran damilare');
capitalizeName('dmailola bukola oladejo');

//padding string method
const me = 'damilare';
console.log(me.padStart(20, '*'));
console.log(me.padEnd(20, '#'));

//Padding use case
const maskedCardNumber = function (number) {
  const st = number + '';
  const lastNumber = st.slice(-4);
  return lastNumber.padStart(st.length, '*');
};
console.log(maskedCardNumber(6548418796569495));
console.log(maskedCardNumber('65896269886365898416'));
console.log(maskedCardNumber(8236864897));

//repeat() string method
const mess = 'There will be a delay in flight tskeoff due to bad weather ';
console.log(mess.repeat(5));

const takeoff = tk => {
  console.log(
    `There are about ${tk} planes waiting to takeoff ${'✈️'.repeat(tk)}`
  );
};
takeoff(5);
takeoff(10);
takeoff(2);

/*//Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase       ✅
firstName            ✅✅
someVariable         ✅✅✅
calculateAge         ✅✅✅✅
delayedDeparture     ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//Solution
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [firstt, secondd] = row.toLowerCase().trim().split('_');
    const output = `${firstt}${secondd.replace(
      secondd[0],
      secondd[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(25)}${'✅'.repeat(i + 1)}`);
  }
});
