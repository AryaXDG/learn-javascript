
// ============================================
// DAY 24: Regular Expressions (Regex) - Advanced
// Topics: Quantifiers, groups, replace
// ============================================

// QUANTIFIERS - Specify how many times a character must appear

// + - One or more times
console.log(/a+/.test("a")); // Output: true
console.log(/a+/.test("aaaa")); // Output: true
console.log(/a+/.test("b")); // Output: false

// * - Zero or more times
console.log(/a*/.test("aaaa")); // Output: true
console.log(/a*/.test("b")); // Output: true (matches zero 'a's)

// ? - Zero or one time
console.log(/colou?r/.test("color")); // Output: true (zero 'u')
console.log(/colou?r/.test("colour")); // Output: true (one 'u')
console.log(/colou?r/.test("colouur")); // Output: false

// {n} - Exactly n times
console.log(/\d{3}/.test("123")); // Output: true
console.log(/\d{3}/.test("12")); // Output: false

// {n,} - n or more times
console.log(/\d{2,}/.test("1234")); // Output: true
console.log(/\d{2,}/.test("1")); // Output: false

// {n,m} - Between n and m times
console.log(/\d{2,4}/.test("123")); // Output: true
console.log(/\d{2,4}/.test("12345")); // Output: false (matches '1234')
console.log(/\d{2,4}/.test("1")); // Output: false

// GROUPS - ( ) - Group parts of regex

// Capturing groups
let dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
let dateStr = "2025-10-27";
let dateMatch = dateStr.match(dateRegex);
console.log(dateMatch);
// Output: ["2025-10-27", "2025", "10", "27"]
// Index 0: Full match
// Index 1: First group (year)
// Index 2: Second group (month)
// Index 3: Third group (day)

console.log("Year:", dateMatch[1]); // Output: 2025
console.log("Month:", dateMatch[2]); // Output: 10

// Non-capturing groups (?:)
let regexNonCapturing = /(?:hello) world/;
console.log(regexNonCapturing.test("hello world")); // Output: true

// REPLACE() METHOD - Use regex to replace text

let str4 = "Hello world! Hello everyone!";

// Replace first occurrence
console.log(str4.replace("Hello", "Hi")); // Output: Hi world! Hello everyone!

// Replace all occurrences (using global flag)
console.log(str4.replace(/Hello/g, "Hi")); // Output: Hi world! Hi everyone!

// Using capturing groups in replacement
let nameStr = "Doe, John";
// Use $1 and $2 to refer to captured groups
let nameReversed = nameStr.replace(/(\w+), (\w+)/, "$2 $1");
console.log(nameReversed); // Output: John Doe

// PRACTICAL EXAMPLE - Email validation (simple)
// [word chars]@[word chars].[2-3 letters]
let emailRegex = /^\w+@\w+\.[a-zA-Z]{2,3}$/;
console.log(emailRegex.test("user@example.com")); // Output: true
console.log(emailRegex.test("invalid-email")); // Output: false
console.log(emailRegex.test("user@example.longdomain")); // Output: false

// PRACTICAL EXAMPLE - Phone number (US format)
// (123) 456-7890
let phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
console.log(phoneRegex.test("(123) 456-7890")); // Output: true
console.log(phoneRegex.test("123-456-7890")); // Output: false

console.log("Day 24 Complete!");

