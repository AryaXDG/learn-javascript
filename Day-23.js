
// ============================================
// DAY 23: Regular Expressions (Regex) - Basics
// Topics: Regex syntax, test, match, search, flags
// ============================================

// REGULAR EXPRESSIONS - Patterns for matching text

// CREATING REGEX

// Literal notation (most common)
let regex1 = /hello/;

// Constructor notation
let regex2 = new RegExp("hello");

// TEST() METHOD - Check if pattern exists (returns true/false)
let textToTest = "hello world";
console.log(regex1.test(textToTest)); // Output: true
console.log(/world/.test(textToTest)); // Output: true
console.log(/goodbye/.test(textToTest)); // Output: false

// REGEX FLAGS - Modify how the regex works

// i - Case-insensitive
let regexCaseInsensitive = /hello/i;
console.log(regexCaseInsensitive.test("Hello world")); // Output: true (matches Hello)

// g - Global search (find all matches, not just first)
let regexGlobal = /hello/g;
let textWithRepeats = "hello, and hello again";
console.log(textWithRepeats.match(regexGlobal)); // Output: ["hello", "hello"]

// m - Multiline search (useful with ^ and $)

// MATCH() METHOD - Find matches (returns array or null)
let str2 = "The rain in SPAIN stays mainly in the plain";
let result5 = str2.match(/ain/g); // Find all "ain"
console.log(result5); // Output: ["ain", "ain", "ain"]

// SEARCH() METHOD - Find index of first match (returns index or -1)
let str3 = "Visit Microsoft!";
let index2 = str3.search(/Microsoft/);
console.log(index2); // Output: 6

// BASIC PATTERNS

// Character sets [abc] - Match any character inside brackets
console.log(/[aeiou]/.test("hello")); // Output: true (matches 'e')

// Character ranges [a-z]
console.log(/[a-z]/.test("Hello")); // Output: true (matches 'e', 'l', 'l', 'o')
console.log(/[A-Z]/.test("Hello")); // Output: true (matches 'H')
console.log(/[0-9]/.test("JavaScript 2025")); // Output: true (matches '2')

// Alternation | (OR)
console.log(/cat|dog/.test("I have a dog")); // Output: true
console.log(/cat|dog/.test("I have a cat")); // Output: true

// METACHARACTERS

// . - Any single character
console.log(/h.t/.test("hot")); // Output: true
console.log(/h.t/.test("hat")); // Output: true
console.log(/h.t/.test("hit")); // Output: true

// \w - Word character (letter, number, or underscore)
console.log(/\w/.test("abc")); // Output: true
console.log(/\w/.test("123")); // Output: true

// \W - Non-word character
console.log(/\W/.test("!@#")); // Output: true

// \d - Digit (0-9)
console.log(/\d/.test("abc 123")); // Output: true

// \D - Non-digit
console.log(/\D/.test("123")); // Output: false
console.log(/\D/.test("abc")); // Output: true

// \s - Whitespace (space, tab, newline)
console.log(/\s/.test("hello world")); // Output: true

// \S - Non-whitespace
console.log(/\S/.test(" ")); // Output: false

// ANCHORS

// ^ - Start of string
console.log(/^Hello/.test("Hello world")); // Output: true
console.log(/^Hello/.test("world Hello")); // Output: false

// $ - End of string
console.log(/world$/.test("Hello world")); // Output: true
console.log(/world$/.test("Hello world!")); // Output: false

// \b - Word boundary
console.log(/\bhello\b/.test("hello world")); // Output: true
console.log(/\bhello\b/.test("sayhello world")); // Output: false (no boundary before)

console.log("Day 23 Complete!");

