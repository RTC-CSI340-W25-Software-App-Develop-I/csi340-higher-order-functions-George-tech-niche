// 1. Introduction to Higher Order Functions
// Callback function definition
const foo = function() {
  console.log("I’m a function!");
};

const boo = function(callback) {
  console.log("Higher Order");
  return callback();
};

// Higher Order Function definition
const callback = function (){
  console.log("callback function")
};
const higherOrder = function (foo) {
  console.log("Higher Order Function");
  return foo();
};
const brunchMenu =['apples', 'bananas', 'oranges', 'mangoes']
const uppercaseMenu = brunchMenu.map(menuItem => menuItem.toUpperCase());
console.log(uppercaseMenu);

const brunchPrices = [12, 14, 26, 10, 18, 14];

const cheaperMenuPrices = brunchPrices.filter(price => price < 17);

console.log(cheaperMenuPrices);


// Pass the Higher Order Function the Callback function as an argument


// Example data for 2 and 3


// 2. Built-in Higher Order Functions

// Map - "Transforms" each item in the array and returns a new array

// Filter - Returns a new array with items that pass the condition in the callback
