
// ============================================
// DAY 12: Arrays - Basics
// Topics: Array creation, indexing, basic methods
// ============================================

// ARRAYS - Ordered collections of data (lists)

// CREATING ARRAYS
let emptyArray = []; // Empty array
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let fruits = ["apple", "banana", "orange"]; // Array of strings
let mixed = [1, "hello", true, null]; // Arrays can hold different types

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(fruits); // Output: ["apple", "banana", "orange"]

// ACCESSING ELEMENTS - Use index (starts at 0!)
console.log(fruits[0]); // Output: apple (first element)
console.log(fruits[1]); // Output: banana (second element)
console.log(fruits[2]); // Output: orange (third element)

// Last element (length - 1)
console.log(fruits[fruits.length - 1]); // Output: orange

// MODIFYING ELEMENTS
fruits[1] = "mango"; // Change banana to mango
console.log(fruits); // Output: ["apple", "mango", "orange"]

// ARRAY LENGTH - Number of elements
console.log("Array length:", fruits.length); // Output: 3

// ADDING ELEMENTS

// push() - Add to END of array
fruits.push("grape");
console.log(fruits); // Output: ["apple", "mango", "orange", "grape"]

// unshift() - Add to BEGINNING of array
fruits.unshift("strawberry");
console.log(fruits); // Output: ["strawberry", "apple", "mango", "orange", "grape"]

// REMOVING ELEMENTS

// pop() - Remove from END, returns removed element
let lastFruit = fruits.pop();
console.log("Removed:", lastFruit); // Output: grape
console.log(fruits); // Output: ["strawberry", "apple", "mango", "orange"]

// shift() - Remove from BEGINNING, returns removed element
let firstFruit = fruits.shift();
console.log("Removed:", firstFruit); // Output: strawberry
console.log(fruits); // Output: ["apple", "mango", "orange"]

// LOOPING THROUGH ARRAYS

// For loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ":", fruits[i]);
}

// For...of loop (cleaner syntax)
console.log("Using for...of loop:");
for (let fruit of fruits) {
  console.log(fruit);
}

// CHECKING IF VALUE EXISTS
console.log(fruits.includes("mango")); // Output: true
console.log(fruits.includes("grape")); // Output: false

// FINDING INDEX
console.log(fruits.indexOf("orange")); // Output: 2
console.log(fruits.indexOf("grape")); // Output: -1 (not found)

// MULTIDIMENSIONAL ARRAYS - Arrays inside arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6
console.log(matrix[2][1]); // Output: 8

console.log("Day 12 Complete!");

