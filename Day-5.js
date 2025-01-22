
// ============================================
// DAY 5: Logical Operators & Type Conversion
// Topics: AND, OR, NOT, Type Conversion
// ============================================

// LOGICAL OPERATORS - Combine multiple conditions

// AND (&&) - Returns true only if BOTH conditions are true
console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && false); // Output: false

let ageCheck = 20;
let hasLicense = true;
let canDrive = ageCheck >= 18 && hasLicense;
console.log("Can drive?", canDrive); // Output: true

// OR (||) - Returns true if AT LEAST ONE condition is true
console.log(true || false); // Output: true
console.log(false || false); // Output: false

let isWeekend = false;
let isHoliday = true;
let canRelax = isWeekend || isHoliday;
console.log("Can relax?", canRelax); // Output: true

// NOT (!) - Reverses the boolean value
console.log(!true); // Output: false
console.log(!false); // Output: true

let isRaining = false;
let isSunny = !isRaining;
console.log("Is sunny?", isSunny); // Output: true

// COMBINING LOGICAL OPERATORS
let temperature = 25;
let isSummer = temperature > 20 && temperature < 35;
console.log("Is summer?", isSummer); // Output: true

// TYPE CONVERSION - Converting between data types

// STRING TO NUMBER
let strNum = "42";
let convertedNum = Number(strNum); // Convert to number
console.log(typeof convertedNum, convertedNum); // Output: number 42

let parsed = parseInt("100"); // Parse integer
console.log(parsed); // Output: 100

let parsedFloat = parseFloat("3.14"); // Parse decimal
console.log(parsedFloat); // Output: 3.14

// NUMBER TO STRING
let numValue = 42;
let strValue = String(numValue); // Convert to string
console.log(typeof strValue, strValue); // Output: string 42

let strValue2 = numValue.toString(); // Alternative method
console.log(typeof strValue2); // Output: string

// TO BOOLEAN
console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false (empty string)
console.log(Boolean("hello")); // Output: true (non-empty string)

// IMPLICIT CONVERSION (JavaScript does it automatically)
console.log("5" + 5); // Output: "55" (number converted to string)
console.log("5" - 2); // Output: 3 (string converted to number)

console.log("Day 5 Complete!");

