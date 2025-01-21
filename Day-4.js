
// ============================================
// DAY 4: Operators - Assignment & Comparison
// Topics: Assignment Shortcuts, Comparison Operators
// ============================================

// ASSIGNMENT OPERATORS - Shortcuts for updating variables

let num = 10;
console.log("Starting value:", num);

// Addition assignment (+=)
num += 5; // Same as: num = num + 5
console.log("After += 5:", num); // Output: 15

// Subtraction assignment (-=)
num -= 3; // Same as: num = num - 3
console.log("After -= 3:", num); // Output: 12

// Multiplication assignment (*=)
num *= 2; // Same as: num = num * 2
console.log("After *= 2:", num); // Output: 24

// Division assignment (/=)
num /= 4; // Same as: num = num / 4
console.log("After /= 4:", num); // Output: 6

// Modulus assignment (%=)
num %= 4; // Same as: num = num % 4
console.log("After %= 4:", num); // Output: 2

// COMPARISON OPERATORS - Compare values and return true/false

// Equal to (==) - Compares values, converts types if needed
console.log(5 == 5); // Output: true
console.log(5 == "5"); // Output: true (string "5" converted to number)

// Strict equal to (===) - Compares values AND types (RECOMMENDED)
console.log(5 === 5); // Output: true
console.log(5 === "5"); // Output: false (different types!)

// Not equal to (!=)
console.log(5 != 3); // Output: true

// Strict not equal to (!==) - RECOMMENDED
console.log(5 !== "5"); // Output: true (different types)

// Greater than (>)
console.log(10 > 5); // Output: true

// Less than (<)
console.log(10 < 5); // Output: false

// Greater than or equal to (>=)
console.log(10 >= 10); // Output: true

// Less than or equal to (<=)
console.log(5 <= 10); // Output: true

// ALWAYS USE === and !== instead of == and != to avoid unexpected type conversions!

console.log("Day 4 Complete!");

