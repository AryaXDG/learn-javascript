
// ============================================
// DAY 3: Operators - Arithmetic
// Topics: Math Operations, Increment/Decrement
// ============================================

// ARITHMETIC OPERATORS - Basic math in JavaScript

// Addition (+)
let sum = 10 + 5;
console.log("10 + 5 =", sum); // Output: 15

// Subtraction (-)
let difference = 10 - 5;
console.log("10 - 5 =", difference); // Output: 5

// Multiplication (*)
let product = 10 * 5;
console.log("10 * 5 =", product); // Output: 50

// Division (/)
let quotient = 10 / 5;
console.log("10 / 5 =", quotient); // Output: 2

// Modulus (%) - Remainder after division
let remainder = 10 % 3;
console.log("10 % 3 =", remainder); // Output: 1 (because 10 ÷ 3 = 3 remainder 1)

// Exponentiation (**) - Power
let power = 2 ** 3;
console.log("2 ** 3 =", power); // Output: 8 (2 × 2 × 2)

// INCREMENT & DECREMENT OPERATORS
let counter = 5;

// Post-increment (returns current value, then adds 1)
console.log(counter++); // Output: 5 (shows 5, then becomes 6)
console.log(counter); // Output: 6

// Pre-increment (adds 1, then returns new value)
console.log(++counter); // Output: 7 (becomes 7, then shows 7)

// Post-decrement
console.log(counter--); // Output: 7 (shows 7, then becomes 6)
console.log(counter); // Output: 6

// Pre-decrement
console.log(--counter); // Output: 5

// ORDER OF OPERATIONS (PEMDAS/BODMAS)
let result = 5 + 3 * 2; // Multiplication first, then addition
console.log(result); // Output: 11 (not 16!)

let resultWithParens = (5 + 3) * 2; // Parentheses first
console.log(resultWithParens); // Output: 16

console.log("Day 3 Complete!");

