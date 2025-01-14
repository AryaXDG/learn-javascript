// ============================================
// DAY 1: Introduction to JavaScript
// Topics: Console, Variables, Comments
// ============================================

// Welcome to JavaScript! Let's start with the basics.

// CONSOLE.LOG - Your first way to see output
// console.log() prints messages to the browser console (F12 to open it)
console.log("Hello, World!"); // This is your first JavaScript program!
console.log("Welcome to Day 1"); // You can print text (strings)
console.log(42); // You can also print numbers

// COMMENTS - Notes in your code that JavaScript ignores
// Single-line comment (like this one)
/* 
   Multi-line comment
   Used for longer explanations
   Can span multiple lines
*/

// VARIABLES - Containers that store data
// Three ways to declare variables: var, let, const

// LET - Use this for variables that can change
let age = 25; // Declaring and initializing a variable
console.log(age); // Output: 25
age = 26; // We can change the value
console.log(age); // Output: 26

// CONST - Use this for variables that should NOT change
const birthYear = 1998; // This value is constant
console.log(birthYear); // Output: 1998
// birthYear = 1999; // ERROR! Cannot reassign a const variable

// VAR - The old way (avoid using it, use let/const instead)
var oldWay = "This is outdated";
console.log(oldWay);

// VARIABLE NAMING RULES
// 1. Must start with letter, $, or _
// 2. Can contain letters, numbers, $, _
// 3. Case sensitive (myVar and myvar are different)
// 4. Cannot use reserved words (like let, const, if, etc.)

let myName = "John"; // camelCase naming convention (recommended)
let my_name = "Jane"; // snake_case (also valid)
let MyName = "Jack"; // PascalCase (used for classes)

console.log("Day 1 Complete!");

