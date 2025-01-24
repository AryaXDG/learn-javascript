
// ============================================
// DAY 6: Conditional Statements - If/Else
// Topics: if, else if, else, Ternary Operator
// ============================================

// CONDITIONAL STATEMENTS - Make decisions in your code

// IF STATEMENT - Execute code if condition is true
let temperature1 = 30;

if (temperature1 > 25) {
  console.log("It's hot outside!"); // This will execute
}

// IF-ELSE STATEMENT - Execute one block or another
let ageForVoting = 20;

if (ageForVoting >= 18) {
  console.log("You can vote!"); // This will execute
} else {
  console.log("You cannot vote yet.");
}

// IF-ELSE IF-ELSE - Multiple conditions
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This will execute
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// NESTED IF STATEMENTS - If inside another if
let isLoggedIn = true;
let isPremium = true;

if (isLoggedIn) {
  console.log("Welcome back!");
  
  if (isPremium) {
    console.log("You have premium access!"); // This will execute
  } else {
    console.log("Consider upgrading to premium!");
  }
} else {
  console.log("Please log in.");
}

// TERNARY OPERATOR - Shorthand for simple if-else
// Syntax: condition ? valueIfTrue : valueIfFalse

let ageForDiscount = 65;
let ticketPrice = ageForDiscount >= 60 ? 5 : 10;
console.log("Ticket price: $" + ticketPrice); // Output: Ticket price: $5

// You can also use it directly in console.log
let status = true;
console.log(status ? "Active" : "Inactive"); // Output: Active

// TRUTHY AND FALSY VALUES
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy!

let username = "John";
if (username) { // Non-empty string is truthy
  console.log("Hello, " + username); // This will execute
}

let emptyString = "";
if (emptyString) {
  console.log("This won't print");
} else {
  console.log("Empty string is falsy"); // This will execute
}

console.log("Day 6 Complete!");

