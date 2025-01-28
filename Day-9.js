
// ============================================
// DAY 9: Loops - While & Do-While
// Topics: while loop, do-while loop, infinite loops
// ============================================

// WHILE LOOP - Repeats while condition is true
// Use when you DON'T know how many iterations you'll need

// Basic while loop
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++; // Don't forget to increment or you'll get infinite loop!
}

// While loop with user input simulation
let password = "";
let attempts = 0;
let correctPassword = "secret123";

// Simulate checking password (in real code, you'd get user input)
let userInputs = ["wrong1", "wrong2", "secret123"];
let inputIndex = 0;

while (password !== correctPassword && attempts < 3) {
  password = userInputs[inputIndex]; // Simulate user input
  console.log(`Attempt ${attempts + 1}: ${password}`);
  
  if (password === correctPassword) {
    console.log("Access granted!");
  } else {
    console.log("Wrong password!");
  }
  
  attempts++;
  inputIndex++;
}

// While loop - sum until threshold
let total = 0;
let num1 = 1;

while (total < 20) {
  total += num1;
  console.log(`Adding ${num1}, total is now: ${total}`);
  num1++;
}

// DO-WHILE LOOP - Executes AT LEAST ONCE, then checks condition
// The key difference: condition is checked AFTER execution

let counter1 = 0;
do {
  console.log("Do-while iteration:", counter1);
  counter1++;
} while (counter1 < 5);

// The difference between while and do-while:
let x = 10;

// This while loop will NOT execute (condition is false from start)
while (x < 5) {
  console.log("This won't print");
}

// This do-while loop WILL execute once (even though condition is false)
do {
  console.log("This will print once! x =", x);
} while (x < 5);

// INFINITE LOOP WARNING - Be careful!
// This would run forever: while (true) { console.log("Forever!"); }
// Always ensure your loop has a way to end!

// Safe way to break out of a loop
let safeCounter = 0;
while (true) {
  console.log("Safe infinite loop iteration:", safeCounter);
  safeCounter++;
  
  if (safeCounter >= 3) {
    console.log("Breaking out of loop!");
    break; // Exit the loop
  }
}

// CONTINUE KEYWORD - Skip current iteration
console.log("Skip odd numbers:");
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue; // Skip the rest of this iteration
  }
  console.log(i); // Only prints even numbers
}

// WHILE vs FOR:
// Use FOR when: You know how many iterations you need
// Use WHILE when: You loop until a condition changes (unknown iterations)

console.log("Day 9 Complete!");

