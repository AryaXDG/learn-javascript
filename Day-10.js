
// ============================================
// DAY 10: Functions - Basics
// Topics: Function declaration, parameters, return
// ============================================

// FUNCTIONS - Reusable blocks of code

// FUNCTION DECLARATION - Basic syntax
function greet() {
  console.log("Hello, World!");
}

// CALLING A FUNCTION - Execute the function
greet(); // Output: Hello, World!
greet(); // You can call it multiple times

// FUNCTION WITH PARAMETERS - Accept input values
function greetPerson(name) {
  console.log("Hello, " + name + "!");
}

greetPerson("Alice"); // Output: Hello, Alice!
greetPerson("Bob"); // Output: Hello, Bob!

// MULTIPLE PARAMETERS
function addNumbers(num1, num2) {
  let sum2 = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum2}`);
}

addNumbers(5, 3); // Output: 5 + 3 = 8
addNumbers(10, 20); // Output: 10 + 20 = 30

// RETURN STATEMENT - Send a value back to the caller
function multiply(a, b) {
  return a * b; // Returns the result
  console.log("This won't execute"); // Code after return is ignored
}

let result2 = multiply(4, 5);
console.log("Result:", result2); // Output: Result: 20

// You can use the returned value directly
console.log("10 times 3 is:", multiply(10, 3));

// FUNCTION WITHOUT RETURN - Returns undefined by default
function noReturn() {
  console.log("This function doesn't return anything");
}

let returnValue = noReturn();
console.log("Return value:", returnValue); // Output: Return value: undefined

// RETURN STOPS FUNCTION EXECUTION
function checkAge(age) {
  if (age < 18) {
    return "Too young"; // Function ends here if age < 18
  }
  return "Old enough"; // Only reached if age >= 18
}

console.log(checkAge(15)); // Output: Too young
console.log(checkAge(25)); // Output: Old enough

// DEFAULT PARAMETERS - Provide default values
function greetWithDefault(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetWithDefault("Charlie"); // Output: Hello, Charlie!
greetWithDefault(); // Output: Hello, Guest! (uses default)

// PRACTICAL EXAMPLE - Calculator function
function calculator(num1, num2, operation) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    return num1 / num2;
  } else {
    return "Invalid operation";
  }
}

console.log(calculator(10, 5, "add")); // Output: 15
console.log(calculator(10, 5, "subtract")); // Output: 5
console.log(calculator(10, 5, "multiply")); // Output: 50
console.log(calculator(10, 5, "divide")); // Output: 2

console.log("Day 10 Complete!");

