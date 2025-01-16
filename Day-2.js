
// ============================================
// DAY 2: Data Types
// Topics: Primitive Types, typeof Operator
// ============================================

// JavaScript has 7 primitive data types. Let's explore them!

// 1. STRING - Text data, wrapped in quotes
let firstName = "Alice"; // Double quotes
let lastName = 'Smith'; // Single quotes
let greeting = `Hello ${firstName}`; // Template literal (backticks) - can embed variables
console.log(greeting); // Output: Hello Alice

// 2. NUMBER - All numbers (integers and decimals)
let integer = 42; // Whole number
let decimal = 3.14; // Decimal number
let negative = -10; // Negative number
console.log(integer, decimal, negative);

// 3. BOOLEAN - True or false values
let isStudent = true;
let isGraduated = false;
console.log(isStudent); // Output: true

// 4. UNDEFINED - Variable declared but not assigned a value
let notAssigned;
console.log(notAssigned); // Output: undefined

// 5. NULL - Intentional absence of value
let emptyValue = null;
console.log(emptyValue); // Output: null

// 6. SYMBOL - Unique identifier (advanced, we'll skip for now)
let symbol = Symbol("unique");

// 7. BIGINT - Very large integers (advanced)
let bigNumber = 1234567890123456789012345678901234567890n;

// TYPEOF OPERATOR - Check the type of a variable
console.log(typeof firstName); // Output: string
console.log(typeof integer); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof notAssigned); // Output: undefined
console.log(typeof emptyValue); // Output: object (this is a JavaScript quirk!)
console.log(typeof symbol); // Output: symbol

console.log("Day 2 Complete!");

