
// ============================================
// DAY 11: Functions - Advanced Concepts
// Topics: Function expressions, Arrow functions, Scope
// ============================================

// FUNCTION EXPRESSION - Store function in a variable
const sayHello = function() {
  console.log("Hello from function expression!");
};

sayHello(); // Call it like a normal function

// Function expression with parameters
const square = function(num) {
  return num * num;
};

console.log("5 squared is:", square(5)); // Output: 25

// ARROW FUNCTIONS - Modern, shorter syntax (ES6)
// Syntax: (parameters) => { code }

const greetArrow = () => {
  console.log("Hello from arrow function!");
};

greetArrow();

// Arrow function with one parameter (parentheses optional)
const double = num => {
  return num * 2;
};

console.log("Double 7:", double(7)); // Output: 14

// Arrow function with implicit return (one-line, no braces needed)
const triple = num => num * 3;

console.log("Triple 5:", triple(5)); // Output: 15

// Arrow function with multiple parameters
const add = (a, b) => a + b;

console.log("3 + 4 =", add(3, 4)); // Output: 7

// COMPARING FUNCTION STYLES
// Traditional function
function traditionalAdd(a, b) {
  return a + b;
}

// Function expression
const expressionAdd = function(a, b) {
  return a + b;
};

// Arrow function
const arrowAdd = (a, b) => a + b;

// All three do the same thing!
console.log(traditionalAdd(2, 3)); // Output: 5
console.log(expressionAdd(2, 3)); // Output: 5
console.log(arrowAdd(2, 3)); // Output: 5

// SCOPE - Where variables are accessible

// GLOBAL SCOPE - Variables declared outside any function
let globalVar = "I'm global";

function accessGlobal() {
  console.log(globalVar); // Can access global variable
}

accessGlobal(); // Output: I'm global

// FUNCTION SCOPE (LOCAL SCOPE) - Variables inside functions
function localScopeExample() {
  let localVar = "I'm local";
  console.log(localVar); // Works inside the function
}

localScopeExample();
// console.log(localVar); // ERROR! localVar is not defined outside function

// BLOCK SCOPE - Variables inside { } blocks (let and const only)
if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // Works inside block
}
// console.log(blockVar); // ERROR! blockVar is not defined outside block

// Variable shadowing - Inner scope can have same variable name
let message = "Global message";

function showMessage() {
  let message = "Local message"; // Different variable!
  console.log(message); // Output: Local message
}

showMessage();
console.log(message); // Output: Global message (unchanged)

// CALLBACKS - Functions passed as arguments to other functions
function processNumber(num, callback) {
  console.log("Processing number:", num);
  let result3 = callback(num); // Call the function passed in
  console.log("Result:", result3);
}

// Pass a function as an argument
processNumber(5, square); // Uses the square function we defined earlier
processNumber(5, double); // Uses the double function

// Inline callback with arrow function
processNumber(5, (n) => n + 10);

console.log("Day 11 Complete!");

