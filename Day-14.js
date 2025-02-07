
// ============================================
// DAY 14: Array Iteration Methods
// Topics: forEach, map, filter, find, some, every
// ============================================

// POWERFUL array methods that take callback functions!

// FOREACH - Execute function for each element (no return value)
let numbers3 = [1, 2, 3, 4, 5];

console.log("Using forEach:");
numbers3.forEach(function(num) {
  console.log(num * 2);
});

// With arrow function (cleaner)
numbers3.forEach(num => console.log("Number:", num));

// forEach with index and array parameters
numbers3.forEach((num, index, array) => {
  console.log(`Index ${index}: ${num} (Array length: ${array.length})`);
});

// MAP - Transform each element and CREATE NEW ARRAY
let doubled = numbers3.map(num => num * 2);
console.log("Doubled:", doubled); // Output: [2, 4, 6, 8, 10]
console.log("Original unchanged:", numbers3); // Output: [1, 2, 3, 4, 5]

// Map with more complex transformation
let people = ["alice", "bob", "charlie"];
let uppercased = people.map(name => name.toUpperCase());
console.log("Uppercased:", uppercased); // Output: ["ALICE", "BOB", "CHARLIE"]

// FILTER - Create new array with elements that pass a test
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = allNumbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]

let greaterThanFive = allNumbers.filter(num => num > 5);
console.log("Greater than 5:", greaterThanFive); // Output: [6, 7, 8, 9, 10]

// Filter with objects
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];

let adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults); // Output: [{name: "Alice", age: 25}, {name: "Charlie", age: 30}]

// FIND - Return FIRST element that passes test (or undefined)
let firstEven = allNumbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven); // Output: 2

let user = users.find(u => u.name === "Bob");
console.log("Found user:", user); // Output: {name: "Bob", age: 17}

// FINDINDEX - Return INDEX of first element that passes test (or -1)
let index = allNumbers.findIndex(num => num > 5);
console.log("Index of first number > 5:", index); // Output: 5 (the number 6)

// SOME - Check if AT LEAST ONE element passes test (returns boolean)
let hasEven = allNumbers.some(num => num % 2 === 0);
console.log("Has even numbers?", hasEven); // Output: true

let hasNegative = allNumbers.some(num => num < 0);
console.log("Has negative numbers?", hasNegative); // Output: false

// EVERY - Check if ALL elements pass test (returns boolean)
let allPositive = allNumbers.every(num => num > 0);
console.log("All positive?", allPositive); // Output: true

let allEven = allNumbers.every(num => num % 2 === 0);
console.log("All even?", allEven); // Output: false

// CHAINING METHODS - Combine multiple methods
let result4 = allNumbers
  .filter(num => num > 3)        // Get numbers > 3: [4,5,6,7,8,9,10]
  .map(num => num * 2)           // Double them: [8,10,12,14,16,18,20]
  .filter(num => num < 15);      // Keep only < 15: [8,10,12,14]

console.log("Chained result:", result4);

// PRACTICAL EXAMPLE - Shopping cart
let cart = [
  { name: "Book", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Notebook", price: 5, quantity: 3 }
];

// Calculate total cost
let totalCost = cart
  .map(item => item.price * item.quantity)
  .reduce((sum, cost) => sum + cost, 0); // We'll learn reduce soon!

console.log("Total cost: $" + totalCost);

console.log("Day 14 Complete!");

