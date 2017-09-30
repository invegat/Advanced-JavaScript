/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

let food = 'pineapple';

let isMyFavoriteFood = (food = 'thousand-year-old egg') => {
  return food === 'thousand-year-old egg';
};

let isThisMyFavorite = isMyFavoriteFood(food);

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

class User {
  constructor(options) {
  this.username = options.username;
  this.password = options.password;
  this.sayHi = () => {
    return `${this.username} says hello!`;
  };
}
}

const username = 'JavaScriptForever';
const password = 'password';

let me = new User({
  username,
  password
});

// ----------------
// let, const, =>, ... (spread operator)

function addArgs() {
  let sum = 0;
  let numbers = arguments[0]
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

function argsToCb() {
  let [cb,...args] = Array.prototype.slice.call(arguments);
  return cb(args);
};

const result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15


/* eslint-enable */
