
// ============================================
// DAY 17: Objects - Advanced Methods
// Topics: Object.keys, values, entries, assign, freeze
// ============================================

// Built-in Object methods for working with objects

let user1 = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
  city: "NYC"
};

// OBJECT.KEYS() - Get array of all property names (keys)
let keys = Object.keys(user1);
console.log("Keys:", keys); // Output: ["name", "age", "email", "city"]

// Useful for counting properties
console.log("Number of properties:", keys.length); // Output: 4

// Loop through keys
keys.forEach(key => {
  console.log(`${key}: ${user1[key]}`);
});

// OBJECT.VALUES() - Get array of all property values
let values = Object.values(user1);
console.log("Values:", values); // Output: ["Alice", 25, "alice@example.com", "NYC"]

// OBJECT.ENTRIES() - Get array of [key, value] pairs
let entries = Object.entries(user1);
console.log("Entries:", entries);
// Output: [["name", "Alice"], ["age", 25], ["email", "alice@example.com"], ["city", "NYC"]]

// Loop through entries
entries.forEach(([key, value]) => {
  console.log(`${key} => ${value}`);
});

// OBJECT.ASSIGN() - Copy/merge objects
let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };

let merged = Object.assign(target, source);
console.log("Merged:", merged); // Output: {a: 1, b: 3, c: 4}
console.log("Target:", target); // Output: {a: 1, b: 3, c: 4} (target was modified!)

// Create a copy without modifying original (use empty object as target)
let original = { x: 1, y: 2 };
let copy = Object.assign({}, original);
copy.x = 10;
console.log("Original:", original); // Output: {x: 1, y: 2} (unchanged)
console.log("Copy:", copy); // Output: {x: 10, y: 2}

// SPREAD OPERATOR - Modern way to copy/merge objects (...)
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combined2 = { ...obj1, ...obj2 };
console.log("Combined:", combined2); // Output: {a: 1, b: 2, c: 3, d: 4}

// Copy object
let person3 = { name: "John", age: 30 };
let personCopy = { ...person3 };
personCopy.age = 31;
console.log("Original person:", person3); // Output: {name: "John", age: 30}
console.log("Copy:", personCopy); // Output: {name: "John", age: 31}

// OBJECT.FREEZE() - Make object immutable (cannot be changed)
let frozenObj = Object.freeze({ name: "Bob", age: 40 });

frozenObj.age = 50; // This won't work!
frozenObj.city = "NYC"; // This won't work either!
delete frozenObj.name; // This won't work!

console.log(frozenObj); // Output: {name: "Bob", age: 40} (unchanged)

// OBJECT.SEAL() - Prevent adding/deleting properties (but can modify existing)
let sealedObj = Object.seal({ name: "Charlie", age: 35 });

sealedObj.age = 36; // This works!
sealedObj.city = "LA"; // This won't work!
delete sealedObj.name; // This won't work!

console.log(sealedObj); // Output: {name: "Charlie", age: 36}

// OBJECT.ISFROZEN() - Check if object is frozen
console.log(Object.isFrozen(frozenObj)); // Output: true
console.log(Object.isFrozen(sealedObj)); // Output: false

// OBJECT.ISSEALED() - Check if object is sealed
console.log(Object.isSealed(sealedObj)); // Output: true
console.log(Object.isSealed(person3)); // Output: false

// DESTRUCTURING - Extract properties into variables
let product = { name: "Laptop", price: 1000, brand: "Dell" };

let { name, price, brand } = product;
console.log(name); // Output: Laptop
console.log(price); // Output: 1000
console.log(brand); // Output: Dell

// Destructuring with different variable names
let { name: productName, price: productPrice } = product;
console.log(productName); // Output: Laptop

// Destructuring with default values
let { color = "black" } = product;
console.log(color); // Output: black (default, since product doesn't have color)

// COMPUTED PROPERTY NAMES - Dynamic property names
let propName = "score";
let gameData = {
  player: "Alice",
  [propName]: 100, // Creates property "score": 100
  [`${propName}Double`]: 200 // Creates property "scoreDouble": 200
};

console.log(gameData); // Output: {player: "Alice", score: 100, scoreDouble: 200}

// PRACTICAL EXAMPLE - Count word occurrences
let text = "hello world hello javascript world";
let wordsArray = text.split(" ");

let wordCount2 = wordsArray.reduce((count, word) => {
  count[word] = (count[word] || 0) + 1;
  return count;
}, {});

console.log("Word count:", wordCount2);
// Output: {hello: 2, world: 2, javascript: 1}

console.log("Day 17 Complete!");

