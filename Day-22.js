
// ============================================
// DAY 22: Math Object
// Topics: Math methods, constants, random numbers
// ============================================

// MATH OBJECT - Built-in object for mathematical operations

// MATH CONSTANTS

console.log("PI:", Math.PI); // π ≈ 3.14159
console.log("E:", Math.E); // Euler's number ≈ 2.718
console.log("LN2:", Math.LN2); // Natural log of 2
console.log("SQRT2:", Math.SQRT2); // Square root of 2

// ROUNDING METHODS

let num3 = 4.7;
let num4 = 4.3;
let num5 = -4.7;

// Math.round() - Round to nearest integer
console.log("Math.round(4.7):", Math.round(num3)); // 5
console.log("Math.round(4.3):", Math.round(num4)); // 4
console.log("Math.round(-4.7):", Math.round(num5)); // -5

// Math.ceil() - Round UP to nearest integer
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5
console.log("Math.ceil(4.9):", Math.ceil(4.9)); // 5
console.log("Math.ceil(-4.1):", Math.ceil(-4.1)); // -4

// Math.floor() - Round DOWN to nearest integer
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.floor(4.1):", Math.floor(4.1)); // 4
console.log("Math.floor(-4.1):", Math.floor(-4.1)); // -5

// Math.trunc() - Remove decimal part (truncate)
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4
console.log("Math.trunc(-4.9):", Math.trunc(-4.9)); // -4

// POWER AND ROOT METHODS

// Math.pow() - Power (x^y)
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 2³ = 8
console.log("Math.pow(5, 2):", Math.pow(5, 2)); // 5² = 25

// ** operator (same as Math.pow)
console.log("2 ** 3:", 2 ** 3); // 8

// Math.sqrt() - Square root
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("Math.sqrt(25):", Math.sqrt(25)); // 5

// Math.cbrt() - Cube root
console.log("Math.cbrt(27):", Math.cbrt(27)); // 3

// ABSOLUTE VALUE AND SIGN

// Math.abs() - Absolute value (distance from zero)
console.log("Math.abs(-5):", Math.abs(-5)); // 5
console.log("Math.abs(5):", Math.abs(5)); // 5

// Math.sign() - Sign of number (-1, 0, or 1)
console.log("Math.sign(-10):", Math.sign(-10)); // -1
console.log("Math.sign(0):", Math.sign(0)); // 0
console.log("Math.sign(10):", Math.sign(10)); // 1

// MIN AND MAX

// Math.min() - Smallest value
console.log("Math.min(5, 2, 9, 1):", Math.min(5, 2, 9, 1)); // 1

// Math.max() - Largest value
console.log("Math.max(5, 2, 9, 1):", Math.max(5, 2, 9, 1)); // 9

// Find min/max in array
let numbers5 = [5, 2, 9, 1, 7];
console.log("Min in array:", Math.min(...numbers5)); // 1
console.log("Max in array:", Math.max(...numbers5)); // 9

// RANDOM NUMBERS

// Math.random() - Random decimal between 0 (inclusive) and 1 (exclusive)
console.log("Random:", Math.random());

// Random integer between 0 and 9
let randomInt = Math.floor(Math.random() * 10);
console.log("Random 0-9:", randomInt);

// Random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random 1-100:", getRandomInt(1, 100));
console.log("Random 50-60:", getRandomInt(50, 60));

// TRIGONOMETRIC FUNCTIONS (angles in radians)

// Math.sin() - Sine
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1

// Math.cos() - Cosine
console.log("Math.cos(0):", Math.cos(0)); // 1

// Math.tan() - Tangent
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // ≈ 1

// Convert degrees to radians
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

console.log("Sin(90°):", Math.sin(degreesToRadians(90))); // 1

// LOGARITHMIC FUNCTIONS

// Math.log() - Natural logarithm (base e)
console.log("Math.log(Math.E):", Math.log(Math.E)); // 1

// Math.log10() - Base 10 logarithm
console.log("Math.log10(100):", Math.log10(100)); // 2

// Math.log2() - Base 2 logarithm
console.log("Math.log2(8):", Math.log2(8)); // 3

// PRACTICAL EXAMPLES

// Round to specific decimal places
function roundToDecimals(num, decimals) {
  let multiplier = Math.pow(10, decimals);
  return Math.round(num * multiplier) / multiplier;
}

console.log("Round 3.14159 to 2 decimals:", roundToDecimals(3.14159, 2)); // 3.14
console.log("Round 3.14159 to 3 decimals:", roundToDecimals(3.14159, 3)); // 3.142

// Generate random color
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log("Random color:", randomColor());

// Calculate distance between two points
function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

console.log("Distance (0,0) to (3,4):", distance(0, 0, 3, 4)); // 5

// Calculate circle area
function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

console.log("Circle area (radius 5):", roundToDecimals(circleArea(5), 2)); // 78.54

// Simulate dice roll
function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // 1-6
}

console.log("Dice roll:", rollDice());

// Random element from array
function randomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let fruits3 = ["apple", "banana", "orange", "grape"];
console.log("Random fruit:", randomElement(fruits3));

// Shuffle array (Fisher-Yates algorithm)
function shuffle(array) {
  let shuffled = [...array]; // Create copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
  }
  return shuffled;
}

let cards = ["A", "K", "Q", "J"];
console.log("Original:", cards);
console.log("Shuffled:", shuffle(cards));

console.log("Day 22 Complete!");

