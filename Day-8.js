
// ============================================
// DAY 8: Loops - For Loop
// Topics: for loop, loop structure, iteration
// ============================================

// LOOPS - Repeat code multiple times

// FOR LOOP - Most common loop, great when you know how many iterations you need
// Syntax: for (initialization; condition; increment) { code }

// Basic for loop - count from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
  // i = 0, 1, 2, 3, 4
}

// Let's break down the for loop structure:
// 1. let i = 0 - Initialize counter (runs once at the start)
// 2. i < 5 - Condition (checked before each iteration)
// 3. i++ - Increment (runs after each iteration)
// 4. { code } - Code to execute in each iteration

// Count from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log("Number:", i);
}

// Count backwards from 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log("Countdown:", i);
}

// Count by 2s (even numbers)
for (let i = 0; i <= 10; i += 2) {
  console.log("Even number:", i);
  // Output: 0, 2, 4, 6, 8, 10
}

// Multiplication table for 5
console.log("Multiplication table for 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 × ${i} = ${5 * i}`);
}

// Calculate sum of numbers 1 to 10
let sum1 = 0;
for (let i = 1; i <= 10; i++) {
  sum1 += i; // sum = sum + i
}
console.log("Sum of 1 to 10:", sum1); // Output: 55

// NESTED FOR LOOPS - Loop inside another loop
console.log("Nested loop - Multiplication table:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
}

// Creating a pattern with nested loops
console.log("Pattern:");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *

// LOOP WITH CONDITIONAL
console.log("Even numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) { // Check if number is even
    console.log(i);
  }
}

console.log("Day 8 Complete!");

