
// ============================================
// DAY 15: Array Reduce & Advanced Patterns
// Topics: reduce, reduceRight, practical examples
// ============================================

// REDUCE - The most powerful array method!
// Reduces array to a single value by executing function on each element
// Syntax: array.reduce(callback, initialValue)
// Callback parameters: (accumulator, currentValue, index, array)

let numbers4 = [1, 2, 3, 4, 5];

// Sum all numbers
let sum3 = numbers4.reduce((accumulator, current) => {
  console.log(`Acc: ${accumulator}, Current: ${current}`);
  return accumulator + current;
}, 0); // 0 is the initial value

console.log("Sum:", sum3); // Output: 15

// How it works:
// 1st: acc=0, current=1, return 0+1=1
// 2nd: acc=1, current=2, return 1+2=3
// 3rd: acc=3, current=3, return 3+3=6
// 4th: acc=6, current=4, return 6+4=10
// 5th: acc=10, current=5, return 10+5=15

// Multiply all numbers
let product2 = numbers4.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product2); // Output: 120

// Find maximum value
let maxNum = numbers4.reduce((max, curr) => curr > max ? curr : max);
console.log("Maximum:", maxNum); // Output: 5

// Count occurrences
let letters = ["a", "b", "a", "c", "b", "a"];
let letterCount = letters.reduce((count, letter) => {
  count[letter] = (count[letter] || 0) + 1;
  return count;
}, {});
console.log("Letter count:", letterCount); // Output: {a: 3, b: 2, c: 1}

// Group objects by property
let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "B" }
];

let groupedByGrade = students.reduce((groups, student) => {
  let grade = student.grade;
  if (!groups[grade]) {
    groups[grade] = [];
  }
  groups[grade].push(student.name);
  return groups;
}, {});

console.log("Grouped:", groupedByGrade);
// Output: {A: ["Alice", "Charlie"], B: ["Bob", "David"]}

// Flatten array of arrays
let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
let flattened2 = arrayOfArrays.reduce((flat, current) => flat.concat(current), []);
console.log("Flattened:", flattened2); // Output: [1, 2, 3, 4, 5, 6]

// REDUCERIGHT - Same as reduce, but goes from right to left
let words2 = ["Hello", "World", "JavaScript"];
let reversed = words2.reduceRight((acc, word) => acc + " " + word);
console.log("Reversed:", reversed); // Output: JavaScript World Hello

// PRACTICAL EXAMPLES

// Calculate shopping cart total with tax
let cartItems = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 75, quantity: 1 }
];

let subtotal = cartItems.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);

let tax = subtotal * 0.1; // 10% tax
let total2 = subtotal + tax;

console.log(`Subtotal: ${subtotal}`); // Output: $1125
console.log(`Tax: ${tax}`); // Output: $112.5
console.log(`Total: ${total2}`); // Output: $1237.5

// Create URL query string from object
let params = { name: "John", age: 30, city: "NYC" };
let queryString = Object.keys(params).reduce((query, key, index) => {
  let separator = index === 0 ? "?" : "&";
  return query + separator + key + "=" + params[key];
}, "");

console.log("Query string:", queryString); // Output: ?name=John&age=30&city=NYC

// Remove duplicates from array
let withDuplicates = [1, 2, 3, 2, 4, 1, 5, 3];
let unique = withDuplicates.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log("Unique values:", unique); // Output: [1, 2, 3, 4, 5]

// Average of numbers
let scores = [85, 90, 78, 92, 88];
let average = scores.reduce((sum, score, index, array) => {
  sum += score;
  if (index === array.length - 1) {
    return sum / array.length;
  }
  return sum;
}, 0);

console.log("Average score:", average); // Output: 86.6

console.log("Day 15 Complete!");

