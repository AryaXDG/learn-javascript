
// ============================================
// DAY 18: Strings - Methods & Manipulation
// Topics: String methods, searching, modifying
// ============================================

// STRINGS - Text data with many useful methods

let str = "Hello, World!";
console.log(str);

// STRING LENGTH
console.log("Length:", str.length); // Output: 13

// ACCESSING CHARACTERS

// Bracket notation (like arrays)
console.log(str[0]); // Output: H
console.log(str[7]); // Output: W

// charAt() method
console.log(str.charAt(0)); // Output: H
console.log(str.charAt(7)); // Output: W

// SEARCHING IN STRINGS

// indexOf() - Find first occurrence (returns index or -1)
console.log(str.indexOf("o")); // Output: 4
console.log(str.indexOf("World")); // Output: 7
console.log(str.indexOf("xyz")); // Output: -1 (not found)

// lastIndexOf() - Find last occurrence
let repeatingStr = "hello hello hello";
console.log(repeatingStr.lastIndexOf("hello")); // Output: 12

// includes() - Check if string contains substring (returns boolean)
console.log(str.includes("World")); // Output: true
console.log(str.includes("xyz")); // Output: false

// startsWith() - Check if string starts with substring
console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("World")); // Output: false

// endsWith() - Check if string ends with substring
console.log(str.endsWith("!")); // Output: true
console.log(str.endsWith("World!")); // Output: true

// EXTRACTING PARTS OF STRINGS

// slice(start, end) - Extract substring
let text2 = "JavaScript Programming";
console.log(text2.slice(0, 10)); // Output: JavaScript
console.log(text2.slice(11)); // Output: Programming (from index 11 to end)
console.log(text2.slice(-11)); // Output: Programming (negative index from end)

// substring(start, end) - Similar to slice (doesn't accept negative indices)
console.log(text2.substring(0, 10)); // Output: JavaScript

// substr(start, length) - Deprecated, use slice instead
console.log(text2.substr(0, 10)); // Output: JavaScript

// CHANGING CASE

let message2 = "Hello World";

// toUpperCase() - Convert to uppercase
console.log(message2.toUpperCase()); // Output: HELLO WORLD

// toLowerCase() - Convert to lowercase
console.log(message2.toLowerCase()); // Output: hello world

// TRIMMING WHITESPACE

let spacedStr = "   Hello World   ";
console.log(spacedStr); // Output: "   Hello World   "

// trim() - Remove whitespace from both ends
console.log(spacedStr.trim()); // Output: "Hello World"

// trimStart() / trimLeft() - Remove from beginning
console.log(spacedStr.trimStart()); // Output: "Hello World   "

// trimEnd() / trimRight() - Remove from end
console.log(spacedStr.trimEnd()); // Output: "   Hello World"

// REPLACING TEXT

let original2 = "Hello World";

// replace() - Replace first occurrence
console.log(original2.replace("World", "JavaScript")); // Output: Hello JavaScript

// replaceAll() - Replace all occurrences
let repeating = "cat cat cat";
console.log(repeating.replaceAll("cat", "dog")); // Output: dog dog dog

// SPLITTING STRINGS

let sentence2 = "JavaScript is awesome";

// split() - Convert string to array
let wordsArray2 = sentence2.split(" "); // Split by space
console.log(wordsArray2); // Output: ["JavaScript", "is", "awesome"]

let csvData = "apple,banana,orange";
let fruits2 = csvData.split(","); // Split by comma
console.log(fruits2); // Output: ["apple", "banana", "orange"]

// Split every character
let letters2 = "hello".split("");
console.log(letters2); // Output: ["h", "e", "l", "l", "o"]

// REPEATING STRINGS

// repeat() - Repeat string n times
console.log("Ha".repeat(5)); // Output: HaHaHaHaHa
console.log("*".repeat(10)); // Output: **********

// PADDING STRINGS

let num2 = "5";

// padStart() - Pad at beginning
console.log(num2.padStart(3, "0")); // Output: 005

// padEnd() - Pad at end
console.log(num2.padEnd(3, "0")); // Output: 500

// TEMPLATE LITERALS - String interpolation (using backticks)
let name2 = "Alice";
let age2 = 25;

// Old way
let oldWay2 = "My name is " + name2 + " and I am " + age2 + " years old";
console.log(oldWay2);

// New way (template literal)
let newWay = `My name is ${name2} and I am ${age2} years old`;
console.log(newWay);

// Multi-line strings
let multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);

// CHAR CODE METHODS

// charCodeAt() - Get character code at position
console.log("A".charCodeAt(0)); // Output: 65
console.log("a".charCodeAt(0)); // Output: 97

// String.fromCharCode() - Create string from character codes
console.log(String.fromCharCode(65, 66, 67)); // Output: ABC

// PRACTICAL EXAMPLES

// Check if email is valid (simple check)
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("user@example.com")); // Output: true
console.log(isValidEmail("invalid-email")); // Output: false

// Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hello")); // Output: Hello
console.log(capitalize("WORLD")); // Output: World

// Count vowels in a string
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World")); // Output: 3

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript")); // Output: tpircSavaJ

console.log("Day 18 Complete!");

